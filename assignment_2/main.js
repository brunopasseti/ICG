import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r127/three.module.min.js';
import Canvas from './canvas.js'




//////////////////////////////////////////////////////////////////////////
// APAGAR WARN APAGAR WARN APAGAR WARN APAGAR WARN APAGAR WARN APAGAR WARN 
let debug = console.table;
const arr = [1,2,3,4,5,6,7,8,9];

let to2dArray = (n, arr) => {
  const newArr = [];
  while(arr.length) newArr.push( arr.splice(0,n) );
  return newArr
}
//////////////////////////////////////////////////////////////////////////

// Cria um color buffer para armazenar a imagem final.

let color_buffer = new Canvas.Canvas("canvas_draw");
color_buffer.clear();
/******************************************************************************
 * Vértices do modelo (cubo) centralizado no seu espaco do objeto. Os dois
 * vértices extremos do cubo são (-1,-1,-1) e (1,1,1), logo, cada aresta do cubo
 * tem comprimento igual a 2.
 *****************************************************************************/
//                                   X     Y     Z    W (coord. homogênea)
let vertices = [new THREE.Vector4(-1.0, -1.0, -1.0, 1.0),
                new THREE.Vector4( 1.0, -1.0, -1.0, 1.0),
                new THREE.Vector4( 1.0, -1.0,  1.0, 1.0),
                new THREE.Vector4(-1.0, -1.0,  1.0, 1.0),
                new THREE.Vector4(-1.0,  1.0, -1.0, 1.0),
                new THREE.Vector4( 1.0,  1.0, -1.0, 1.0),
                new THREE.Vector4( 1.0,  1.0,  1.0, 1.0),
                new THREE.Vector4(-1.0,  1.0,  1.0, 1.0)];

/******************************************************************************
 * As 12 arestas do cubo, indicadas através dos índices dos seus vértices.
 *****************************************************************************/
let edges = [[0,1],
             [1,2],
             [2,3],
             [3,0],
             [4,5],
             [5,6],
             [6,7],
             [7,4],
             [0,4],
             [1,5],
             [2,6],
             [3,7]];

/******************************************************************************
 * Matriz Model (modelagem): Esp. Objeto --> Esp. Universo. 
 * OBS: A matriz está carregada inicialmente com a identidade.
 *****************************************************************************/
let m_model = new THREE.Matrix4();

m_model.set(1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0);

for (let i = 0; i < 8; ++i)
    vertices[i].applyMatrix4(m_model);

/******************************************************************************
 * Parâmetros da camera sintética.
 *****************************************************************************/
let cam_pos = new THREE.Vector3(1.3,1.7,2.0);     // posição da câmera no esp. do Universo.
let cam_look_at = new THREE.Vector3(0.0,0.0,0.0); // ponto para o qual a câmera aponta.
let cam_up = new THREE.Vector3(0.0,1.0,0.0);      // vetor Up da câmera.

/******************************************************************************
 * Matriz View (visualização): Esp. Universo --> Esp. Câmera
 * OBS: A matriz está carregada inicialmente com a identidade. 
 *****************************************************************************/

  // Derivar os vetores da base da câmera a partir dos parâmetros informados acima.

  // ---------- implementar aqui ----------------------------------------------*
  let X_cam = new THREE.Vector3();
  let Y_cam = new THREE.Vector3();
  let Z_cam = new THREE.Vector3();
  let D = cam_look_at.clone().sub(cam_pos)
  Z_cam = D.clone().negate().normalize();
  X_cam = X_cam.crossVectors(cam_up,Z_cam).normalize();
  Y_cam = Y_cam.crossVectors(Z_cam, X_cam).normalize();

  // Construir 'm_bt', a inversa da matriz de base da câmera.

  // ---------- implementar aqui ----------------------------------------------*
  let m_bt = new THREE.Matrix4();

  m_bt.makeBasis(X_cam, Y_cam, Z_cam);
  m_bt = m_bt.invert()
  // m_bt.set(X_cam.x, X_cam.y, X_cam.z, 0.0,
  //          Y_cam.x, Y_cam.y, Y_cam.z, 0.0,
  //          Z_cam.x, Z_cam.y, Z_cam.z, 0.0,
  //          0.0, 0.0, 0.0, 1.0);

  // Construir a matriz 'm_t' de translação para tratar os casos em que as
  // origens do espaço do universo e da câmera não coincidem.

  // ---------- implementar aqui ----------------------------------------------*
  let m_t = new THREE.Matrix4();

  let translation_vector = new THREE.Vector3(0,0,0);
  translation_vector = cam_pos.sub(new THREE.Vector3(0,0,0))

  m_t.set(1.0, 0.0, 0.0, -translation_vector.x,
          0.0, 1.0, 0.0, -translation_vector.y,
          0.0, 0.0, 1.0, -translation_vector.z,
          0.0, 0.0, 0.0, 1.0);

  // Constrói a matriz de visualização 'm_view' como o produto
  //  de 'm_bt' e 'm_t'.
  let m_view = m_bt.clone().multiply(m_t);
  for (let i = 0; i < 8; ++i)
      vertices[i].applyMatrix4(m_view);


/******************************************************************************
 * Matriz de Projecao: Esp. Câmera --> Esp. Recorte
 * OBS: A matriz está carregada inicialmente com a identidade. 
 *****************************************************************************/

  // ---------- implementar aqui ----------------------------------------------*
  let m_projection = new THREE.Matrix4();
  const phi = 1.618033988749894848204586834365638117720309;
  const d = 1;
  m_projection.set(1.0, 0.0, 0.0, 0.0,
                   0.0, 1.0, 0.0, 0.0,
                   0.0, 0.0, 1.0, d,
                   0.0, 0.0, -1/d, 0);

  for (let i = 0; i < 8; ++i)
    vertices[i].applyMatrix4(m_projection);

/******************************************************************************
 * Homogeneizacao (divisao por W): Esp. Recorte --> Esp. Canônico
 *****************************************************************************/

  // ---------- implementar aqui ----------------------------------------------*
  for (let i = 0; i < 8; ++i)
    vertices[i].divideScalar(1 - (vertices[i].z/d));

/******************************************************************************
 * Matriz Viewport: Esp. Canônico --> Esp. Tela
 * OBS: A matriz está carregada inicialmente com a identidade. 
 *****************************************************************************/

  // ---------- implementar aqui ----------------------------------------------
  let m_viewport = new THREE.Matrix4();
  let width = color_buffer.getWidth();
  {
    let s = new THREE.Matrix4()
    let t = new THREE.Matrix4()
    s.set(
      width/2.0, 0.0, 0.0, 0.0,
      0.0, width/2.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
    t.set(
      1.0, 0.0, 0.0, 1.0,
      0.0, 1.0, 0.0, 1.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
    m_viewport = s.multiply(t).clone()
    for (let i = 0; i < 8; ++i)
      vertices[i].applyMatrix4(m_viewport);
  }

/******************************************************************************
 * Rasterização
 *****************************************************************************/
// ---------- implementar aqui ----------------------------------------------
const cube_color = [255,0,0,255]
  for(let edge of edges){
    let xi = vertices[edge[0]].x, yi = vertices[edge[0]].y;
    let xf = vertices[edge[1]].x, yf = vertices[edge[1]].y;
    color_buffer.MidPointLineAlgorithm(xi,yi,xf,yf, cube_color, cube_color);
  }