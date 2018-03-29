var conf={application:"calculator",
          version:12,
          modules:[{name: "calculatrice",
                    rootpath: "js/lib/calculator/",
                    version: "v-02",
                    src:["calculator-core-v-02.js",
                         "calculator-events-v-02.js"
                        ],
                    active: true
                    },
                    {name: "calculator V01",
                    rootpath: "js/lib/calculator/V1",
                    version: "v-01",
                    src:["calculator-core-v-01.js",
                         "calculator-events-v-01"
                        ],
                    active: false
                    }
                  ] 
          }