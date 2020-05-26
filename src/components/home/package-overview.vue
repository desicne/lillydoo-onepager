<template>
    <div class="overview">
        <h3>Dein Testpaket enthält</h3>
        <div class="half-container">
            <div class="half-package">
                <img src="/public/images/package-details/lillydoo-little-blowballs-design-preview-tp.png" alt="blowballs">
                <div class="content-display">
                    <h4>10 LILLYDOO WINDELN</h4>
                    <ul>
                        <li>0 % Parfüme &amp; Lotionen, 100 % LILLYDOO Schutz</li>
                        <li>Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption</li>
                        <li>Extra weich und super bequem</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="half-container">
            <div class="half-package">
                <img :src="wipesImg" alt="blowballs">
                <div class="content-display">
                    <h4 v-if="selectedOption < 4">10 LILLYDOO WINDELN</h4>
                    <h4 v-else>15 FEUCHTTÜCHER MIT 99 % WASSER</h4>
                    <ul>
                        <li>0 % Parfüme &amp; Lotionen, 100 % LILLYDOO Schutz</li>
                        <li>Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption</li>
                        <li>Extra weich und super bequem</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props: ['selectedOption'],
    computed: {
        wipesImg() {
            if (this.selectedOption < 4) {
               return '/public/images/package-details/water-wipes-15-small.png'
            }
            return '/public/images/package-details/sensitive-wipes-15-small.jpg'
        }
    }
}
</script>
<style lang="stylus" scoped>
.overview {
    margin: auto;
    padding-top: 3em;
    padding-bottom: 3em;
    background: #fff;
    text-align: center;
    max-width: 860px;
}

.half-container {
    display: inline-block;
    width: calc(50% - 1em);
    margin-top: 2em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 2em;
}

.half-package {
    display:table;
    border-collapse:collapse;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    text-align: left;
    vertical-align: top;

    img {
        display:table-cell;
        height: 128px;
        margin-right: 1em;
        vertical-align: top;
    }
}

.content-display {
    display:table-cell;
    vertical-align: top;

    h4 {
        margin: 0;
        font-size: 1em;
    }

    li {
        margin-bottom: 0.5em;
        font-size: 0.8em;
    }
}

@media (max-width: 770px) {
    .half-container {
        width: calc(100% - 1em);
        text-align: left;

        ul {
            padding-inline-start: 1em;
        }
    }

    .half-package {
        img {
            height: auto;
            width: 95%;
        }
    }
}
</style>