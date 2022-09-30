import * as React from 'react'
import { PiletApi } from 'consolid-shell'
import { Drawer, CssBaseline, Divider, SvgIcon } from "@mui/material"

const App = ({ piral }: { piral: PiletApi }) => {
    const mod = piral.meta
    const children = mod["modules"].map(item => item.link) || []
    const [activePlugin, setActivePlugin] = React.useState(children.length && children[0])

    return (
        <div>
            {activePlugin ? (
                <div>
                    <div style={{ marginLeft: 75 }}>
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
                        anchor="left" variant="permanent">
                        {mod["modules"].map((child) => {
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