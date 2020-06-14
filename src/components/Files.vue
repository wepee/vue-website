<template>
    <v-container class="mx-8">
        <v-row justify="center">
            <v-subheader>Fichiers</v-subheader>

            <v-expansion-panels popout>
                <v-expansion-panel
                        v-for="(message, i) in messages"
                        :key="i"
                        hide-actions
                >
                    <v-expansion-panel-header>
                        <v-row
                                align="center"
                                class="spacer"
                                no-gutters
                        >
                            <v-col
                                    cols="4"
                                    sm="2"
                                    md="1"
                            >
                                <v-avatar
                                        size="36px"
                                >
                                    <v-icon
                                            :color="message.color"
                                    >{{message.icon}}</v-icon>
                                </v-avatar>
                            </v-col>

                            <v-col
                                    class="hidden-xs-only"
                                    sm="5"
                                    md="3"
                            >
                                <strong v-html="message.name"></strong>
                                <span
                                        v-if="message.total"
                                        class="grey--text"
                                >
                  &nbsp;({{ message.total }})
                </span>
                            </v-col>

                            <v-col
                                    class="text-no-wrap"
                                    cols="5"
                                    sm="3"
                            >
                                <v-chip
                                        v-if="message.new"
                                        color="teal lighten-4"
                                        class="ml-0 mr-2 black--text"
                                        label
                                        small
                                >
                                    {{ message.new }} new
                                </v-chip>
                                <strong v-html="message.title"></strong>
                            </v-col>

                            <v-col
                                    v-if="message.excerpt"
                                    class="grey--text text-truncate hidden-sm-and-down"
                            >
                                &mdash;
                                {{ message.excerpt }}
                            </v-col>
                        </v-row>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <v-divider></v-divider>
                        <v-card-text>
                            <ul v-if="message.files">
                                <li v-for="file in message.files" :key="file"><a :href="file.link" download> {{file.name}}</a></li>
                            </ul>
                        </v-card-text>

                        <v-card class="v-banner__content d-flex justify-space-around" v-if="message.name==='Vidéo'">
                            <video autoplay="" muted="" loop="">
                                <source src="../assets/web.mp4" type="video/mp4">
                            </video>
                        </v-card>

                        <v-card v-if="message.code">
                            <v-card-text v-for="code in message.code" :key="code">
                                <h3 class="display-1 py-8">{{code.name}}</h3>
                                <pre><code class="flush : cpp">{{code.content}}</code></pre>
                            </v-card-text>
                        </v-card>

                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            messages: [
                {
                    icon: 'mdi-download-box',
                    name: 'Téléchargements',
                    excerpt: 'CV, Photos...',
                    total: 3,
                    files: [
                        {
                            name: 'Mon CV',
                            link: 'https://github.com/wepee/vue-website/raw/master/src/assets/Adam_ALEB_CV.pdf',
                        },
                        {
                            name: 'Mon projet en zip',
                            link: 'https://github.com/wepee/vue-website/archive/master.zip',
                        },
                        {
                            name: 'Photo de mon CV',
                            link: 'https://github.com/wepee/vue-website/raw/master/src/assets/maPhoto.jpg',
                        },

                    ],
                },
                {
                    icon: 'mdi-movie',
                    name: 'Vidéo',
                    new: 1,
                    total:1,
                },
                {
                    icon: 'mdi-xml',
                    name: 'Exemple de code',
                    new: 2,
                    total: 2,
                    code: [
                        {
                            name: 'Extrait du code Vue.js de cette section',
                            content:' <v-card-text>\n' +
                                '                            <ul v-if="message.files">\n' +
                                '                                <li v-for="file in message.files" :key="file"><a :href="file.link"> {{file.name}}</a></li>\n' +
                                '                            </ul>\n' +
                                '                        </v-card-text>\n' +
                                '                        <v-card class="v-banner__content" v-if="message.name===\'Vidéo\'">\n' +
                                '                            <video autoplay="" muted="" loop="">\n' +
                                '                                <source src="https://vod-progressive.akamaized.net/exp=1590951326~acl=%2A%2F452088332.mp4" type="video/mp4">\n' +
                                '                            </video>\n' +
                                '                        </v-card>\n' +
                                '<v-card-text>\n',
                        },
                        {
                            name: 'Extrait du code C++ du projet poker en ligne',
                            content:'void ODrive::waitForChange(string file)\n' +
                                '{\n' +
                                '    string odfile=odDrivePath_+\'/\'+file;\n' +
                                '    // Extract parent dir\n' +
                                '    string odDir;\n' +
                                '    size_t pos=file.find_last_of("/\\\\");\n' +
                                '    if (pos!=string::npos) odDir=file.substr(0,pos);\n' +
                                '    else odDir="";\n' +
                                '\n' +
                                '    // Get initial time\n' +
                                '    struct stat t_stat;\n' +
                                '    stat(odfile.c_str(), &t_stat);\n' +
                                '    time_t t1=t_stat.st_mtime;\n' +
                                '\n' +
                                '    // Scan time change\n' +
                                '    bool changed=false;\n' +
                                '    while(!changed)\n' +
                                '    {\n' +
                                '        // Refresh\n' +
                                '        refresh(odDir);\n' +
                                '        // Check if time is changed\n' +
                                '        stat(odfile.c_str(), &t_stat);\n' +
                                '        time_t t2=t_stat.st_mtime;\n' +
                                '        if (difftime(t1,t2)!=0) changed=true;\n' +
                                '    }\n' +
                                '\n' +
                                '}',
                        }],
                },
            ],
        }),
    }
</script>