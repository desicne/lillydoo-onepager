<template>
    <div class="highlights">
        <h3>Wie es funktioniert</h3>
        <div class="content-highlights">
            <div class="triplet">
                <img src="/public/icons/lillydoo-your-trialbox-icon.svg" alt="trial">
                <h4><b>DEIN TESTPAKET</b></h4>
                <p>Wir schenken Dir die Produkte, Du übernimmst nur das Porto.</p>
            </div>
            <div class="triplet">
                <img src="/public/icons/lillydoo-your-flexibility-icon.svg" alt="flex">
                <h4><b>DEINE FLEXIBILITÄT</b></h4>
                <p class="more-padding">Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Oder noch vor der ersten Lieferung kündigen.</p>
                <span>Erfahre hier mehr über das<br>LILLYDOO Windel-Abo.</span>
            </div>
            <div class="triplet">
                <img src="/public/icons/lillydoo-your-subscription-icon.svg" alt="subscription">
                <h4><b>DEINE MONATSBOX</b></h4>
                <p>Jederzeit Windelgröße, Designs und Lieferintervalle anpassen oder weitere Produkte hinzufügen.</p>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
.highlights {
    margin: auto;
    padding-top: 3em;
    padding-bottom: 3em;
    background: #f2f2f2;
    text-align: center;
    box-sizing: border-box;
    width: 100%;

    span {
        margin-top: 2em;
        line-height: 1.5;
    }
}

.content-highlights {
    max-width: 860px;
    margin: auto;
}

.triplet {
    display: inline-block;
    width: calc(33% - 1em);
    margin-top: 2em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 2em;
    padding: 1em;
    box-sizing: border-box;
    vertical-align: top;

    h4 {
        font-size: 1em;
    }
}

.more-padding {
    margin-bottom: 3em;
}

@media (max-width: 770px) {
    .triplet {
        width: calc(100% - 2em);
        margin-top: 1em;
        margin-bottom: 0em;
        padding: 0em;
    }

    .more-padding {
        margin-bottom: 2em;
    }
}
</style>