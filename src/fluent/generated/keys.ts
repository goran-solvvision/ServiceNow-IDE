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
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: '07f2c9469dfc48cd881df9f2dc0a0f73'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '14957cc38a9240ff8ab421c1fe10cb0f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '833ce412838042a1852e0e1e6227a04c'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '5888179b65114e05a5d483f5c4f963cc'
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
