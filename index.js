let scene, camera, light, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
    camera.rotation.y = 45/180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 400;
    camera.position.z = 500;

    light = new THREE.AmbientLight(0xffffff, 50);
    scene.add(light);

    directionalLight = new THREE.DirectionalLight(0x353535, 40);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xffffff, 20);
    light.position.set(500, 300, 500);
    scene.add(light);

    light2 = new THREE.PointLight(0xffffff, 20);
    light2.position.set(500, -300, 0);
    scene.add(light2);

    light3 = new THREE.PointLight(0xffffff, 20);
    light3.position.set(-500, 100, 500);
    scene.add(light3);

    light4 = new THREE.PointLight(0xffffff, 20);
    light4.position.set(-500, -300, 0);
    scene.add(light4);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);

    let loader = new THREE.GLTFLoader();
    loader.load("scene.gltf", function(gltf) {
        car = gltf.scene.children[0];
        car.scale.set(100, 100, 100);
        scene.add(car);
        animate();
    });
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();
