import { Vector } from "./Vector";
import { Matrix } from "./Matrix";
import { quicksort } from "./Algorithm";
import * as THREE from "three";
import { formatDiagnosticsWithColorAndContext } from "typescript";

alert("Hello World") // 1
const a: Array<number> = [];
for(let i = 0; i < 10; i++){
    a.push(Math.floor(Math.random() * (100 - 0)));
} // 2
const sorted: Array<number> = quicksort(a, 0, 9);
console.log(sorted); // 3
const v1 = new Vector(1,2,3);
const v2 = new Vector(3,2,1);
v1.add(v2);
v1.add(new Vector(1,1,1));
console.log("v1: ", v1);
console.log("v1 unit vector: ", v1.unit);
console.log("v2: ", v2);
console.log("Dot: ", v1.dot(v2));
console.log("Angle between v1 and v2;", v1.angle(v2));
console.log("Cross: ", v1.cross(v2));
const m1 = new Matrix(v1.asList());
m1.printAsTable();
console.log(m1.isIdentity);
m1.T.printAsTable();
const m2 = new Matrix([[5, 2, 3], [4, 5, 6], [7, 8, 5]]);
m2.printAsTable();
const m3 = m2.mulMatrix(m1);
m3.printAsTable()
console.log("Det m2: ", m2.determinant);




const canvasJS = <HTMLCanvasElement> document.getElementById("canvasDesenhoJS");
if(canvasJS){
    const ctx = canvasJS.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(0,40, 130, 200);
    ctx.fillStyle = "#AAAAAA";
    ctx.fillRect(30,20, 50, 50);
    ctx.fillStyle = "#FFAA22";
    ctx.fillRect(100, 200, 75, 75);
    ctx.fillStyle = "#2AAFF";
    ctx.fillRect(200,200, 100, 100);
    ctx.fillStyle = "#BBAA99";
    ctx.fillRect(50,250, 200, 50);
    ctx.fillStyle = "#11FF22";
    ctx.fillRect(200,10, 50, 50);

}
////////////////////////////////////////////////////////////
function createCamera(){
    const fov = 75;
    const aspect = 2;  
    const near = 0.1;
    const far = 10;
    let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 5;

    return camera;
}

function createLight(){
    const color = 0xFFFFFF;
    const intensity = 1;
    return new THREE.DirectionalLight(color, intensity);
}

function createCubo(position, scene, material){
    const width = 2;
    const height = 2;
    const depth = 2;

    const geometry = new THREE.BoxGeometry(width, height, depth);
    const cubo = new THREE.Mesh(geometry, material);

    scene.add(cubo);

    if(position)
        cubo.position.x = position;

    // cubo.rotation.x = .5;
    // cubo.rotation.y = 2;

    return cubo;    
}


const canvas = document.querySelector("#cuboEstatico");
const renderer = new THREE.WebGLRenderer({canvas});

const cameraEstatico = createCamera();

let light = createLight()
light.position.set(-1, 1, 3);

const sceneEstatico = new THREE.Scene();
sceneEstatico.background = new THREE.Color(0x111111);
sceneEstatico.add(light);

const materialEstatico = new THREE.MeshPhongMaterial({color:0xB1A0F6});

createCubo(null, sceneEstatico, materialEstatico);

renderer.render(sceneEstatico, cameraEstatico);

const canvasEmTempoReal = document.querySelector("#cuboEmTempoReal");
const rendererEmTempoReal = new THREE.WebGLRenderer({canvas:canvasEmTempoReal});

const cameraEmTempoReal = createCamera();

let lightEmTempoReal = createLight()
lightEmTempoReal.position.set(2, 1, 5);

const sceneEmTempoReal = new THREE.Scene();
sceneEmTempoReal.background = new THREE.Color(0x111111);
sceneEmTempoReal.add(lightEmTempoReal);

const materialEmTempoReal = new THREE.MeshPhongMaterial({color:0xB1A0F6});
let cubo = createCubo(null, sceneEmTempoReal, materialEmTempoReal);

function moveBox(time){
    time *= 0.001;
    
    // Rotate cube
    cubo.rotation.x = time;
    cubo.rotation.y = time;

    rendererEmTempoReal.render(sceneEmTempoReal, cameraEmTempoReal);
    requestAnimationFrame(moveBox);
}
requestAnimationFrame(moveBox);


const canvasTresCubos = document.querySelector("#tresCubos");
const rendererTresCubos = new THREE.WebGLRenderer({canvas:canvasTresCubos});

const cameraTresCubos = createCamera();

let lightTresCubos = createLight()
lightTresCubos.position.set(-2,1,4);

const sceneTresCubos = new THREE.Scene();
sceneTresCubos.background = new THREE.Color(0x111111);
sceneTresCubos.add(lightTresCubos);

let cubos = [
    createCubo(4, sceneTresCubos, new THREE.MeshNormalMaterial({color:0x0B4F6C})),
    createCubo(0, sceneTresCubos, new THREE.MeshPhongMaterial({color:0x01BAEF})),
    createCubo(-4, sceneTresCubos, new THREE.MeshToonMaterial({color:0xB80C09}))
]

cubos.forEach(cubo => sceneTresCubos.add(cubo));
rendererTresCubos.render(sceneTresCubos, cameraTresCubos);