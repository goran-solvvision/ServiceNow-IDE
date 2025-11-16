import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '460bd2303e304c72b324dd1a4389dad7'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '968eaee9bc4b47559eeabb107a4bdd8d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '833ce412838042a1852e0e1e6227a04c'
                    }
                    'x_snc_report_saf_i/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'd1e6a8ce6d374db5ae22ec0208d98cdf'
                    }
                    'x_snc_report_saf_i/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '496367b348f645b3944af37c58f87b2c'
                    }
                }
            }
        }
    }
}
