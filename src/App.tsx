import * as React from 'react'
import { PiletApi } from 'consolid-shell'
import { Drawer, CssBaseline, Divider, SvgIcon } from "@mui/material"

const App = ({ piral }: { piral: PiletApi }) => { 
    const children = piral.getChildModules(piral)
    const [activePlugin, setActivePlugin] = React.useState(children.length && children[0].link)

    return (
        <div style={{position: "relative", height: "800px", marginLeft: -10, marginTop: -10}}> 
            {activePlugin ? (
                <div>
                    <div style={{ marginLeft: 60 }}>
                        <piral.Extension name={`${activePlugin}`} />
                    </div>
                    <Drawer
                        sx={{
                            '& .MuiDrawer-root': {
                                position: 'absolute'
                            },
                            '& .MuiPaper-root': {
                                position: 'absolute'
                            },
                        }}
                        anchor="left"
                        variant="permanent"
                        >
                        {children.map((child) => {
                            return (
                                <div key={child.link}>

                                    <div style={{ padding: 10, paddingLeft: 0 }} key={child + "_icon"}>
                                        <SvgIcon
                                            color="primary"
                                            style={{ marginLeft: 15, height: 30, width: 30 }}
                                            onClick={() => setActivePlugin(child.link)}
                                        >
                                            <piral.Extension name={`${child.link}/icon`} />
                                        </SvgIcon>
                                    </div>
                                    <Divider />
                                </div>
                            );
                        })}
                    </Drawer>
                </div>
            ) : (
                <p>No children were passed to this module. Please check the configuration.</p>
            )}
        </div>
    )
}

export default App