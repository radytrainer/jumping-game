const actor = document.querySelector('#actor');
const rocket = document.querySelector('#rocket');
let point = 0;
let hasLife = true;

const actorJump = () => {
    if (actor.classList != "animation") {
        actor.classList.add('animation');
    }
    setTimeout(() => actor.classList.remove('animation'), 500);
}

const stopAnimation = () => {
    actor.style.animationPlayState = 'paused';
}

const hideRocket = () => {
    rocket.style.animate = "none";
    rocket.style.display = "none";
}

const showDeadActor = () => {
    document.querySelector('#actor-picture').src = "images/actor_dead.png";
}
const showBoom = () => {
    let boom = document.querySelector('.boom');
    boom.style.display = 'block';
    setTimeout(() => {
        // show dead actor
        showDeadActor();
        boom.style.display = 'none';
    }, 500);
}
// 
const isActorDead = setInterval(() => {
    let actorTop = parseInt(window.getComputedStyle(actor).getPropertyValue("top"));
    let rocketLeft = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));

    if (rocketLeft < 40 && rocketLeft > 0 && actorTop >= 260) {
        // hide the rocket
        hideRocket();
        // stop animation
        stopAnimation();
        // show boom image
        showBoom();
        // dead life
        hasLife = false;
    }
}, 10)


// 
const showPoint = setInterval(() => {
    document.querySelector('.point').textContent = point;
})
document.body.addEventListener('keydown', (event) => {
    if (event.key == "ArrowUp") {
        actorJump();
        if (hasLife) {
            point += 1;
        }
    }
});

