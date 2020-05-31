<template>
    <div>
        <d3-network :net-nodes="nodes" :net-links="links" :options="options">
        </d3-network>
    </div>
</template>

<script>
    import D3Network from 'vue-d3-network'
    export default {
        name: "Skills",
        components: {
            D3Network,
        },

        data () {
            return {
                nodes: [
                    { id: 1, name: 'Hard skills', _color:'grey' },
                    { id: 2, name: 'Soft skills', _color:'grey'  },
                    { id: 3, name: 'Vue.JS', _color:'orange' },
                    { id: 4, name: 'C++',_color:'orange' },
                    { id: 5, name: 'HTML/CSS',_color:'orange' },
                    { id: 6, name: 'C#' ,_color:'orange' },
                    { id: 7, name:'Python',_color:'orange' },
                    { id: 8, name: 'SQL', _color:'orange' },
                    { id: 9, name: 'Ruby on Rails',_color:'orange' },
                    { id: 10, name: 'Bootstrap',_color:'orange' },
                    { id: 11, name: 'Qt' ,_color:'orange' },
                    { id: 12, name:'Travail d\'équipe', _color:'orange' },
                    { id: 13, name:'Vente', _color:'orange' },
                    { id: 14, name:'Gestion de projet', _color:'orange' },
                    { id: 15, name:'Entrepreneuriat', _color:'orange' },
                    { id: 16, name:'Travail d\'équipe', _color:'orange' },
                    { id: 17, name:'Travail d\'équipe', _color:'orange' },
                    { id: 18, name:'Travail d\'équipe', _color:'orange' },
                ],
                links: [
                    { sid: 1, tid: 3, _color:'red' },
                    { sid: 1, tid: 4, _color:'red' },
                    { sid: 1, tid: 5,_color:'red' },
                    { sid: 1, tid: 6, _color :'red' },
                    { sid: 1, tid: 7,  _color :'red'  },
                    { sid: 1, tid: 8, _color :'red'  },
                    { sid: 1, tid: 9, _color :'red'  },
                    { sid: 1, tid: 10, _color :'red'  },
                    { sid: 1, tid: 11, _color :'red'  },
                    { sid: 2, tid: 12, _color :'blue'  },
                    { sid: 2, tid: 13, _color :'blue'  },
                    { sid: 2, tid: 14, _color :'blue'  },
                    { sid: 2, tid: 15, _color :'blue'  },
                    { sid: 2, tid: 16, _color :'blue'  },
                    { sid: 2, tid: 17, _color :'blue'  },
                    { sid: 2, tid: 18, _color :'blue'  },
                ],
                options:
                    {
                        force: 3000,
                        nodeSize: 20,
                        nodeLabels: true,
                        linkWidth:3,
                        fontSize:14,
                    }
            }
        },


    }
</script>

<style scoped>

</style>