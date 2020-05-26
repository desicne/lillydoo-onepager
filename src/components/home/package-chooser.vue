<template>
    <div id="choosePackage" class="package-chooser">
        <div class="half left">
            <img :src="imageSelected" alt="testpack-selected">
        </div>
        <div class="half right">
            <h3>Unser gratis Testpaket</h3>
            <h4>Wähle Deine Größe</h4>
            <div v-for="item in packageOptions" :key="item.order" class="box-choice" :class="{'selected': chosenPack == item.order }" @click="changeSelection(item.order)">
                <p class="order">{{ item.order }}</p>
                <p class="desc">{{ item.desc }}</p>
            </div>
            <!-- I used a quicker but primitive approach to display this part in right place based on mobile-view / in reality would adjusted my sass flex structure-->
            <div class="info-main">
                <div class="info">
                    Teste jetzt unsere hautfreundlichen Windeln und erhalte unsere Feuchttücher mit 99 % Wasser zu Größe 1 - 3 oder die Sensitiven Feuchttücher zu Größe 4 - 5.
                </div>
                <ul>
                    <li class="highlighted">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</li>
                    <li>Preise inkl. MwSt., ggf. zzgl. <span>Versandkosten</span></li>
                </ul>
                <a href="">In den Warenkorb legen</a>
            </div>
        </div>
        <!-- TO DO: Remove this, and fix above flexbox puzzle :D -->
        <div class="half info-box">
            <div class="info">
                Teste jetzt unsere hautfreundlichen Windeln und erhalte unsere Feuchttücher mit 99 % Wasser zu Größe 1 - 3 oder die Sensitiven Feuchttücher zu Größe 4 - 5.
            </div>
            <ul>
                <li class="highlighted">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</li>
                <li>Preise inkl. MwSt., ggf. zzgl. <span>Versandkosten</span></li>
            </ul>
            <a href="">In den Warenkorb legen</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chosenPack: 1,
            packageOptions: [{
                order: 1,
                desc: '(2-3 kg)'
            },{
                order: 2,
                desc: '(3-4 kg)'
            },{
                order: 3,
                desc: '(4-7 kg)'
            },{
                order: 4,
                desc: '(7-10 kg)'
            },{
                order: 5,
                desc: '(10-12 kg)'
            }]
        }
    },
    computed: {
        imageSelected() {
            return '/public/images/packages/lillydoo-testpaket-' + this.chosenPack + '0.jpg'
        }
    },
    methods: {
        changeSelection(event) {
            this.chosenPack = event
            this.$emit('newSelection', event)
        }
    }
}
</script>
<style lang="stylus" scoped>
.package-chooser {
    position: relative;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    min-height: 50vh;
    width: 100%;
    margin: auto;
    padding: 2em;
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
    max-width: 1260px;
}

.half {
    flex: 1 0 50%;
    position: relative;
    width: 50%;
    padding: 1em;
    box-sizing: border-box;
    vertical-align: top;

    img {
        width: 100%;
    }
}

.box-choice {
    display: inline-block;
    padding: 0.5em;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 1em;
    width: calc(20% - 8px);
    height: 98px;
    border: 2px solid #00afab;
    background: #fff;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    vertical-align: top;
    transition: all 0.5s ease;

    &:hover {
        background: #00afab;
        color: #fff;

        p {
            color: #fff;
        }
    }
}

.info-box {
    display: none;
}

.selected {
    background: #00afab;
    color: #fff;

    p {
        color: #fff;
    }
}

.order {
    color: #a7a7a7;
    font-size: 1.3em;
    font-weight: 700;
}

.desc {
    color: #a7a7a7;
    font-size: 0.6em;
    text-transform: uppercase;
}

.info {
    font-size: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
}

.highlighted {
    color: #00afab

    &::before {
        color: #00afab;
    }
}

@media (max-width: 770px) {
    .package-chooser {
        text-align: left;
        justify-content: space-between;
    }
    
    .half {
        flex: 1 0 100%;
        padding: 0;
        width: 100%;
    }

    .left {
        order: 2;
    }

    .right {
        order: 1;
    }

    .box-choice {
        width: 30%;
    }

    .info-main {
        display: none;
    }

    .info-box {
        order: 3;
        display: block;
    }
}
</style>