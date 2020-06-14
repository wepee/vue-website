<template>
    <div class="pa-12">
        <div class="d-inline-flex align-content-center">
            <v-label class="align-content-center">Ajouter les experiences professionelles</v-label>
            <v-switch v-model="showPro" :color="showPro ? 'red' : 'blue'"></v-switch>
        </div>

        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                    v-for="exp in exps"
                    :key="exp.titre"
                    v-show="showPro || !exp.isPro"
                    transition="fade-transition"
                    :color="exp.isPro ? 'red' : 'blue'"

            >
                <span slot="opposite">{{exp.annee}}</span>
                <v-card class="elevation-4">

                        <div class="d-flex justify-space-around">
                            <v-avatar
                                       size="80"
                                       tile
                                       v-if="exp.image"
                            >
                                <v-img :src="exp.image">
                                </v-img>
                            </v-avatar>

                            <div class="d-flex-col">
                                <v-card-title class="headline">{{exp.titre}}</v-card-title>
                                <v-card-text>
                                    {{exp.descriptif}}
                                </v-card-text>
                                <ul v-if="exp.taches">
                                    <li v-for="tache in exp.taches" :key="tache">{{ tache }} </li>
                                </ul>
                            </div>

                        </div>


                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
    export default {
        name: "Timeline",
        data: () => ({
            showPro: false,
            exps: [
                {
                    titre :'Chargé d\'affaires',
                    etablissement :'Inspire',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :['Prospection et qualification du prospect','Suivi d\'étude, de l\'analyse du besoin à la fidélisation du client\n','Product Owner : gestion de projet agile'],
                    annee : '2019 à Maintenant',
                    link :'',
                    image :'data:image/png;base64,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',
                    isPro : true,

                },{
                    titre :'Cycle ingénieur',
                    etablissement :'Telecom Saint-etienne',
                    descriptif : 'st ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2019 à Maintenant',
                    link :'',
                    image : 'https://josephchataignon.github.io/Ressources/Images/logoTSE.png',
                    isPro : false,
                },


                {
                    titre :'Conseiller de vente',
                    etablissement :'AS Saint-Etienne',
                    descriptif : 'Démarcher les prospects pour promouvoir le service MoneyVerte\n',
                    annee : '2019 à Maintenant',
                    link :'',
                    image :'https://www.letelegramme.fr/ar/imgproxy.php/images/2018/05/15/saint-etienne-peak6-en-discussions-exclusives-pour-le-rachat_3946554.png?article=11959484&aaaammjj=11959484',
                    isPro : true,
                },
                {
                    titre :'Agent polyvalent',
                    etablissement :'Californian Burger',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    taches :['Environ 150 couverts','Équipe de 4 personnes'],
                    annee : '2019 à Maintenant',
                    link :'',
                    image :'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAABIFBMVEUAAADvPw7////S09XR0tTXNgy3uLqrrK3Z2tzX2dmEhYR0dXRUVFT5QRB0dHYAAAPiOxDKzc4aBwI9EgOWlpYXFxfp6emfn58vLy/g4ODBwcH4+PilpaVhYWGxsbG+vr7u7u4QEBAiIiKNjY04ODhPT09paWmQkJBNEwVuGwVcXFxFRUXwLgDsPxAdHR09PT0xDAS3MAqeKgz73tftOwCsLQvxTibONg5aGAT6hm9+Iwz/Qw57fXwQAQIkCQFoHQmNJwnCMwovCwZVFgdEEgd6HwjzZEb3kX31qZz7u675ybz6x7jvcFbwWTf67eb2nYvvgW3yXkP1bVj1a0X6gWDuSyH7d1WKHwzucEdlGQ0hCgCrMBY/FABXGwLGsLBsWlx3zKu6AAAYvUlEQVR4nO2dCXvauLqADTZgQxzbCashrAGyOQEKIQtJIFuXadqZNmnPTO+59///iyvJkiwvYAdwtun3zKTGi6xX36LNlrkolWI2kUvE36wAuGzRouXIRlYSJJF/yyKJoiBlHeBVXgKHBEF47tyFJZBM4CFelQXPCvAIOiBAeuGtCE//WvhZC7zAM6oWeML/VgQp2gKUCgS8wLMWDs8TRVF6KyKKpg8LFmDBBK/yAqtxQK2X2sk3I+2SDthZQEGoInCNZy1B1Ed17o1JPaWLNqvWIDgxdBTcRG3juXMZjrQ0iSgd2L1YAOCaCY4Cmlh67gyGJyXaSgEK1qIcaLhQ0xfbz527MKUt0iodNGQ4UpVBA0g/d97ClbRITJ3nC1xDJKYvxZ87Z2FLnDZOgW0neOLj0uZzZyxsyYu0+koAcBzUxdxz5yt8yRHzNsHNH+LBc2crfDkQWY3jbf25c/UUohNaC/zfYOnA1nneqXFx9NyZegoZiW7w1efO1FPIqug29acEVxQF/HHtDf/GKckV3J5Y4wgd/kUCt8y9Id/2ecFNVNd26NTc84KfnXeujy5Oxr3eoNudIOl2B7964/H20db6+ZrbA5ZYIE8DblqxQux67frqpNcdqkZEphKRIxHmpywb6nAyGP99fQ5d3nSB1weOBLFfXo0HQxURAtBIf6+/Z5d+PxIx4H8GLggj1h1frJ+RNJaVmyfSOPzv7PpmMDRMYMS81z+8PX7/4eOnT++gfPrj44evx5/vDFAYfcSNBRaS2h1frSlLVHmI4Ezc4pTOTVeNEGYIbXx7/8e7L1G3FL+8+/T1/g6WC9K9qX+oe3Uy3jrjllTZhQlO/uO2esMI1bRh9PcO//zDi5nFf/fp/W0EGX7EhDd1HxtcrHG47l9I/+GaOszdVi9GoSHBXv/4k0ldLH75Ag3844cPX4F8+PDhIzT7L1++4Cm9L5/e/9Uniqd2rw4uzhRuUcWHCQ400hkPTWpks+BP/+7rF2jNH7/++fmvQ2dkM8ObcXh7//4rcATI/+7DN2NvD6MbKBHA3tvC1cTLA4d2eDQwZJJlQ1VBng/ff/r4/psJTMyYEazZfh+dEPnr+Cs0ji8fPyO9M+fIkeHN2UL5CwXcrHK3h8TEAXUshjJ8iIKWm9hbIH//7vgDsH7EbrBGL6vjS9I4eCHgKDdjFds4oo6pAVm96Q+PP7579/Vuz1Zifdnonc8d4JYPDrWt3KhE2YB6GFMNL6RHwAPD//bh08d7l7Eg9BegcbNVehEj1FDZppUvgI4uBZVg//brx/eHfZu3y8Z4Pp0vFxyF2k5XxtiI2kvdc5ZCfy/y+Suo4SKss8uxI+xdzwgOczA2W6UE29PMjTld3gDsd8fHd2yLFlQcXXdH7snBO0NUgVFs76hmrHdlr/0ByAG7cQtatOxeWb14To3DqLaNelVGLDaTG5hnp3s6v9f3jbvvh7bikAePtfZlgivcAHarzUA+ixuYZ0y56HXnJjf6kbu7ByvKAfJh53G5XR64wq0NZYPUXyrhnqLXYVeVF4j00Kzu7uzXHz1K5UvUeMcA3CpU9s/LrZ7ZapnmyUBFxiI1nJnIA1sQkcjNY3K7NHBlizg3QO5wyvUQDrRMBvMFsWDgzDZoKxjy+OnBFQ5y01DeW1eU9e2J/EuZLKzXgIWAas1xcGtfFvg1sGrViuWDqyvl7KILot1piCq3kQPHeozOlwOudNiqGwko/LO1k2HvZDyZ6ulLJ4/Igf18cXBYf56pMlN3g5g+7Ha3Oe76Go2UXPaMhdrq/sxojAORRy4C9lKXAz4E0YXhHlzDyg0e6xxdgb9XkzBgD+8ezI0+7reooHksG52nAgeMvdPIkAE/Are+7qydr52fnxixwaQbCUXjh/fH31Gj/fDH9weUPiCP9IfB4tsywLdsdh67Ato+Gg64SefySunJcJwoFDvvPxz/iKD4cfvnD7THQE2H3pOAw+JVWTuPTXq9n92hvLWlrl1frytdG/aSSgAn8wCarsYhsPXvABwq34B9f/kqiLEvQeM9OeaSyFCJGee9ywF3ybbQDDw1BNpt8xYBvK4vm900OXL3+f57X4b7Du++R1BLAoSbILX5guBw3OFUdYPL4+1I7DzGxXqgXGx6Br9kOTZZoIZ7uL2DLn13//mw//34h/EAfoIN0EuHKh+CAHcSOjjsiU48uNUIiPMGp44n6talXV3dWCR2gVx/XjFuj+/hCD2A3oscyv2H+/v/7IEAtwcPqvDmBuc/3bAw+HrfzR0zY6wSgwPL22yr9VQ2/ttTlLHd21XsAN7m7zgETPz2Hqi8b9ze9VFkN47v+xEy1wSHfOSev5cv7OMDT4WjPKx1iUOTTMe2zztXnNKNnNrQYmexmRZgkJkYg2yBGHELIlsEqtuQDx+sy9EIvho6uHIecXObcweGvDVGyL0BJe9ebY3RnN+FymLJ69yJPD3a4ecHTmUyUt+HdfiPSB8WxOEhaL8cMiYBvfz0xDfni4KPPRSOB5flm2tAc/qL46xQJp/+XDs/6p2ATg2jzojR4S5OI9Mi/Wmke7P+z9na1glM6AFYd+Thxw8zvoNG2+GPzz/61qVI5cOQfZzjhh7c2NLlAafK8i845jyRsQvK3fOt6+GVbDgg5bHytwz8VHaZvCFHcJCG5nveA1Hi/vgB+/Td/feH/h2KddYFKANbfhlfEHzdS+EkG6rSOx2Yj70MSbY63d6V2nWp1pC73JUR6/Zch06H1uQgfJJmXT09vKNtg9vjb8Da7aUIVe7fP10Q3NPSDQJzcWls31wdrZ8cnWA7NoYR+drTok/XAFSvO7CNQJrDp+wjYRy3FpP7Vqj/bjbX2QoB1mjyMGTwyVRLh/Y7BK0X+XQQk+m0Kfh/eORRbRnqJbc9PI04uu4GaoUx7op07lVu7EWoPr0MFVzxUrgVsOW/OQA9GFo8hiH/9G68yNYDBOzevx3D5fBnz1Y07uofgsvbPtFtEXBFuZrl4sC4VTj0OogBHUyGwP4Am2GcPWL6SI553bXjcxV28tnki4H/nAUuw8ikdMbrptKAf26NY6cnPx/TWh0oXuJTdMjJJz6ZXwicG8y2dLW3rpBHlJCRKtw/Z48ZgZN7nWtTthhZH7prPSc4qFLCBP+lejVYTRkOjv7npjeYDEFLykAzLMPJoLe9tXYzMVRfMSt6g8xIDeFjrkQmE5CoOQtreCaFopvPIzLzgmd20T/nJ10vdiCTSQw9BKI6CsVQh7+8DMU8bBZbbNgd9E62r67PUe6th7k53Osyf6ytX22PB5MYZnX4WyckH9/J7eNncrdA59OYgj8NzxI6vQiTmAzGN//t2MZJKSh9rBs/1a6Qh9y5s+vt3iRmz4EhX4cV3A6kXIbkR7m86HXRVOEj+NHpprYm3d7Po3UKaYtk0+6v0JcbzIesOjcDBt6Qj8KL6rns//4fzoT5z/rFCXTqGOtt05wYeDyw5/H20fq5GfaW8YDu5c0ERgcYIOSr2RPmCzVgDipVKbfj2Altr7N19ff2zc3JzcnJzTaWiyNTrkBc7qz5vX+xv9lspUaNdKlcjuu6YH/NX6/Ey6VcY9TadbzZb3vLITyNA9lNFLJivLGTIbfjqOdNFfoSiutILb/SSuYScU2QCkBEUWTWoxEc/4KD8BytUmq06LuwCoUPsVtaW4F/6w0NZkBLtFsHGb9LPCWT390YtXNlHSVEXu023/Y1VzEh7HSJC7uAy0Q9l7LeBCbsYZn6QcJ8CXW3rUPliAVRqCTSydWd3Xy9Nv2yWqaeP2hurCYbQLkVTYIXYt0KhBTBAkgJJSxKvKbr8Xi5XCKSAC5Q0TUen4BuryVWgy9qsZCp1/Uyfv82v5rQUOZFbIEiL2jAFUFegSQS8G88DrxVE+ASKw5Dpsu0oAyYGAC1nGsnWxvNg1mlyNU3V4C9lHTNLPpK0AU9FvTxZEFPEQPPt9plQcQ8TDByimCuUSBg/ZK7Is1KAvDZ9GjDGbU4aCiZuimZjJdP1ZqpdlwAJVpeeQJwbr8E7rSap7/rzdVGoqLxxP7swOxiK5YA46iUSyBIr2zu04Qy+YOV1mojnUuUK8BQNEFkRUD2lMi1R61mni2GzVZOy2qt8MGBotMgBOu51QPWIGt56MRt6MQw1yQygcR5TTP9tZRuJ0etneZBnrkwk2+uJtOJuC5IoiOuCzjksYv0wPgATtLiueSKZSObI11vhg8OE4nDDAiV0miD0ZlLprlqrQ4q7VGjVAaWgmBpWBeITxArQbGMRDymWOD9tXJjhdw93/BbxWZJz8DkR2Ue5AToXtIqiVwjBWJSvr6f8WCt1fbr+c3d5kZrlISGDENzAQZ2Eud4i5YyCsBOQKslUcql0+kGErABg3sFeAFdkaogVRq7wXK8vOfcajvpCm/qQDQtELgiNGu9UkEL5wGjh2YPWic09NOwjisxvKAY9mNUhMAbdjdnxnUY2YHFtBO6gNLV0kHYl/sQb605ylVoZJ8hAg7tjCGLpMrWKwkYszZnw3pKfmeU04G76Ku+F4fxasbmziid0K3I7lkIqA1GTwAxGmt38XW19lca8QKf9GlGhvj6VWYT+3EpAZsu0MqRQONHjTDQPhmlQFz3s+Q5ZL+V0GfXac//4nxYkknNJH+74D7yG/w3uBs8U99fevSxS/2g2QS9sHBvYhc/8M2kLmWr2YKk5+g4B2w0YaHnHeRcuzhuRPa1rE1LkuQWbcFcGrYq5cgqU7Wk/dxGqomrp5S1M2W7yQ7HbTiTZm+b52wyG7ypM2sURyVz5w6zi/YAW9ZSxpbwZF+FK7hfEc+iczIJ9hbRuJm/TNV9ulmkGvOOOdoh4V8ljkvYkwYNGibtxiPA0/Zb48WvEswuuuLdhj03nD2TcasMLCmgonUSFlElVMu6z49qUOk6syPJlm6O40q2pKHCmZOl4ODsPXDSUNg8UUw/cCnqEpi7laJ7f2oaOCp5NlMFP3CNvdregp8BXvHKEWvUUEgjYT7wvAc38h9v8OiGQxvN2eCbtuTti5ZNB294ZQhI3LaPrP02H7jm3msemAJecYDrs8HtCAWOlangbmUUUVQnYYccri0AzhpPlblfkgHXy5UCc4nD//Zngkv2rK4EAmdDWEEvg0pNQowpvK+M/x09ErxQxhLPMQovNzd3abZBvil4EVZwFDabcYDnZoHv4l8VrKtEEPCaFW0LeBTHbF+QGzdxOWqPBGfuXrO40W+rEtmlEbTYZArbrfHqLPAc/jXCJpNlm2HTwFdo2qKt1UY8oEpR6o8D15srpuxk6DWk7qfWnrTAdxkCWMqOqiY1A5y4yC6xTnYcbhq4FRfso9RJkn+qn/bjwC3ZoPfg8fm0HilZ4MmNluUDIwscF5I0HXyF/iCxhF1ndxp42ZaGJeQ2I64ZJbeeE3wnZx3mbLYJdnhGdXgrAk7SrgvTwEmUSnB17LdVpjcwDZxalH2t0gNijSDCV63N+cBpPsv4fOrkuid4YZPJWAkbconscILT+NiyMpJ6BLhmA2/jvQJToqWlgZPUPcGrCaQvCo6drjrN1EmOYEgjTVdGi9PAXe19U0i84BvtRoU9Yx5wquAKPp8pCTe4ZnbPdHoKNj5ig05w0tDKgqySA0WrizYNnAQxe6+mGfWS3fnAN2gXIus8P+1l6tm8HTxhP+wAr7v7d1HcrZkJvkvPLTKOUfJKDFlqYPBqAUt2x7qHOdNVp79XPX1cs4NvzgRPRb1E8AVnO9B66qC+n19pcd6xFrFa4CP6lYq6F3iZKRiqlOy+rZyKGetO6V2rc7BhA3e09B3gzq4llk1fcFtfvFgFTelifcc7MZihDY/dO37glgEVE42SVao601YHxila+23g9nvawb37fdCJ/MA9xkAOEh4pQal4g6/4gden5G7FDm7FmwMbuH1Yxw6ejHqL5Avu4SQtmpuiKfTInOBW/WWTOGcHt7RXsoOzAywOcNKscWV11xfcakcRkcjlhc08lH1a4qk5wT090db6QHGYplPdt4FzrMXYwPcp9wrKap3eqOQPPkUfUauJSW+kzQvuQV7Yd4Fbxpe0g7O6YcElaunEtF1V58zBxqb3CEmUnMB0r+YFd9mVedwObtXJoh08w1xYYsBFejsy3kTb2qTT5TOu3ixR+y5mqdD2TwHvqI5WqlmXrFTwzmqC08mm64s7B3HLYIs6zlaNpynDn2WSenUXb+J0EvS2VRCvc65MVOkDpxrZUwoEDot7d6OFJq5rGSL0WMbatZ9xCUevqLGbLqlvlHSBF/REK+9KGc/h7NOfNXs61t1qnHUTKzM0QetYUPA3KguBJ0s5S9IpXJYjvANNB6XM7RKsRRo59vSR40mVVk4vZKvVrBRP79jSIQI7DW17Esx3TerJsgQuh9fnkpy/LATu6HkUzfE0En5Q9kl7E46/O6eReOux292KrS2zyaZDBFZzzjazhp2jZpsEKHL+shC4EHXmA+4leUDg7HCXq4dWJBpzzFUVbQXIgrum4MxBlYy9QKpPDo6GOIKDk3EtZ1NYCg5ujtc5MiJ5ZTZc8MrjwM1KdeTcW34EOHQL5zCBNi3DSwYHPVECywcAL+o6bdmg9oWrq5L2AwdJ0EJvMA2XYkEqFKquRlJY4FWONqeDgEMA0l6DWaQt42KpCRoL+WayaQNPMLP9GBzaMjPkR+6Io3ktyPMbywCHzV885BfE1LMZa8o1Z8FEC478EnD2W1wMOGnAN6w7PuYjTksx9XSa2O5OEHDO6m9BHycKdz4CQ8BJY9ehcRIxNtn2flUoN4I9SrPc4IYGJn2Dm9U7hgAHeNuMSJkaEhacSNsCZ5LQmCSwBFL8MsFx5fSIehwqh4Rk1Poh84hJH3AqVXRLRy8yyKdHl6pxKfMY8GICKdYTfBQMvEgQHft9309YtqlnWfANP3Bz3JqMEvN+4GkPcPq4asN2JIDKl1ydtRlW2zNJnqZuPlRAfu1OAc+Zg9WNphvcegYHluBGg4zH8pyvLAscVy4w1JDmRDXPDJA2GfAycUn7g2poKtwD3KM6i5YFWxJEyFCbY4o3LHBo4HHrjtYolPVcC5oxIIR52mdDc+vWVLyUIAdY8CrsbQLRGHDrKLKaZrnUbo/aJTJEJUzN8lLBo1KBjr+CvTWP0XI0TWnVvCSgmSN/Hud7+TjbVq/T5yuRcp3DogEqtIXA3Y8ronlP17g0Hs1mmhwEAAVAjwkaf3A6/wSTdnbvAryNs2Rwc6zQFYLMGVcGnHTAzVaLe9ojADgJJc7HHaOOx5ueBJyYmKNBgedbGXA602mOoGw4rT0AOJ1rdWUk0Cellzn0xLzS2bKq+GKJdD5Irg+YS0km07YxFFTFOwf12aGnOrNdYqZdYS783jFcAnieFefrTjuNUiLBvs5OT4fbGbxtHc6vpnO55EYzT941recd4khin/mR2W0lweXtVIA22xLAX7P8Bv8N/hs8qDS0lyQN/wwvC1wriC9Ign41fhmmTp5HfgkS8LX5hddsfIKvJz9WZi87RGXRRafJd4fpT++N6UeCbMx1ro8svNo2d7n+oqQT8Ntni4Gfn0xU+YVJJNbb4sJdX10ZG0/02ZvHiSwPr8jXgZcNDv36evai6M8qcGn5UNZzA8599Nxws6QvT3y+eDevqZsLpD/Nl63mELRadRga55TYc7P5ibwdCvj45fo3kdlL0s4H7rv88QsQQ575IYU5NX4041sPL0Vmrzs9J/j4FYBH1Fm2Pif4r5fv4vB7uMsHD/PjlMuT6+WDL/Ito6cRA319Zengsz5k82JEnUUwJ/j6C261mQLabt0QwLnhK1D5RQjgysWLd3Kfb8TM23Lj5vxy+pOJIW+F0DsDXb5a7CW7OfwQTSirbQPy85j8Yv3ckCNjn5GI+cEVZQA/efIi2WX1An3aYfngCF45GhovUOuyrPb8h1oXAueU6/Fk+vchnkViw8HFPz7aXhCcw5+6OFt7SYI/HhKqxuk3jl7OTJL1zQy/M3/Pj/8G/w3+tiUl4vXN/23gq/9i8H+nqXuBB31w6FVLQxRcph7k1cxXLwneBc4HeJXl9QuFZcClAF/Uee3SEgXWx7EEfUjuFYvOs6Zubgn/grg+kqiWLXD4z6b/ta9ZNi1uxsfhx3m0J13W/6mlrvEsOKnZ4B9Je8M639RE4tSAtMEVSH/F3PVm/Twl0e+IAesWC1yVAYcRruL8IumbkJ2KyJNPxcEvUIlZLspaPvr6lpbeyPsn9Xokv5HWRJ4XGI3zWpSLFkSBJRfQp7gk4c0IfI4fx29agUkFAB4VeJ5F53lecPx+1eJmAQUQheBVXnChPrealiZeJSHwVQQezbpL5c3o3INd4OFrmuhl/QJv1eVvVUwHR4TobVdzlYKsIOHPDD63aYYoPP52pPlaLl6eoSjhMnnDSofYEk+W4aSrc1QlzeNb129JRNBEkeir1xQcGnyhkXjD0iiwb6v/P14nmYHkI2INAAAAAElFTkSuQmCC',
                    isPro : true,
                },
                {
                    titre :'Diplôme CiTiSE',
                    etablissement :'IUT Saint-Etienne & Telecom Saint-etienne',
                    descriptif : 'Durant ce cursus j\'ai pus m\'initier à differentes technologies et valider : ',
                    taches :['DU Cycle initial des technologies de l\'information','DUT Génie électrique et informatique industrielle', 'L2 mathématiques / physique'],
                    annee : '2017 à 2019',
                    link :'',
                    image :'https://pbs.twimg.com/profile_images/1214096982094077952/6oep7EyO_400x400.jpg',
                    isPro : false,

                },
                {
                    titre :'',
                    etablissement :'Professeur Particulier',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2017 à Maintenant',
                    link :'',
                    image :'https://pbs.twimg.com/profile_images/1196812413200457729/qJXhzQH9_400x400.png',
                    isPro : true,
                },
                {
                    titre :'Agent de production',
                    etablissement :'Noble-chocolat',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : 'été 2019',
                    link :'',
                    image :'https://www.food.be/sites/default/files/styles/company_logo/public/companies/0012000000RYXd9AAH/01257000000VEN1AAO/0012000000RYXd9AAH.jpg?itok=vvPUCaJ4',
                    isPro : true,
                },
                {
                    titre :'Classe préparatoire PTSI',
                    etablissement :'Lycée de l\'europe',
                    descriptif : 'Voici ce que j\'ai fait blablabla j\'ai bien travaillé',
                    annee : '2016 à 2017',
                    link :'',
                    image :'https://file.diplomeo-static.com/file/00/00/01/40/14044.svg',
                    isPro : false,

                },

            ],
        }),
    }
</script>

<style scoped>

</style>