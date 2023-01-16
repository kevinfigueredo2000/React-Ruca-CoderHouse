import { createContext, useContext, useState } from "react";
import React from 'react'

export const AltPagContext = createContext([]);

export const AlturaPaginaProvider = ({ children }) => {
    const [ubicacionPrincipal, setUbicacionPrincipal] = useState(window.pageYOffset);
    const [desplazamiento_Actual, setDesplazamiento_Actual] = useState(null)

    window.onscroll = function () {
        setDesplazamiento_Actual(window.pageYOffset);
        setUbicacionPrincipal(desplazamiento_Actual);
    }

    return (
        <AltPagContext.Provider value={{ ubicacionPrincipal, desplazamiento_Actual }}>
            {children}
        </AltPagContext.Provider>
    )
}
export const useAltPag = () => useContext(AltPagContext);