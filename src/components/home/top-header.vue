<template>
    <div class="header">
        <div class="header-cta">
            <h2>Entdecke unsere <br> Hautfreundlichkeit</h2>
            <a href="#choosePackage">Wähle Deine Größe</a>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.header {
    position: relative;
    height: 50vh;
    width: 100%;
    padding: 2em;
    overflow: hidden;
    background-image: url('/public/images/header-trialbox-desktop.jpg');
    background-position: 0 0;
    background-size: cover;
    box-sizing: border-box;
}

.header-cta {
    position: absolute;
    display: block;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 2em;
    padding: 2em;
    background: rgba(255,255,255,0.5);
    height: fit-content;
    width: fit-content;
    text-align: center;
    box-sizing: border-box;
}

@media (max-width: 770px) {
    .header-cta {
        top: auto;
        left: 0;
        right: 0;
        padding: 1em;
        width: 100vw;
    }
}
</style>