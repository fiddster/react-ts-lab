import { useState, useEffect } from "react"
import statusIcons from './statusIcons.json';

const iconsPath = process.env.PUBLIC_URL + '/icons/'
const buffPath = iconsPath + 'buff-icons/'
const debuffPath = iconsPath + 'debuff-icons/'
const statusPath = iconsPath + 'status-icons/'

interface IStatusMarker {
    status: string;
    small?: boolean
}

export const StatusMarker: React.FC<IStatusMarker> = ({ status, small }) => {

    const [Status] = useState(status)
    const [Small] = useState(small)
    const [StatusImgSrc, setStatusImgSrc] = useState("")

    useEffect(() => {
        
        function GetStatusImgSrc(){

            let status = statusIcons.buffs.find(x => x.name == Status)
    
            if (status !== undefined) {
                setStatusImgSrc(buffPath + status.imgSrc)
                return
            }
    
            status = statusIcons.debuffs.find(x => x.name == Status)
    
            if (status !== undefined) {
                setStatusImgSrc(debuffPath + status.imgSrc)
                return
            }
    
            status = statusIcons.conditions.find(x => x.name == Status)
    
            if (status !== undefined) {
                setStatusImgSrc(statusPath + status.imgSrc)
                return
            }
        }
        
        GetStatusImgSrc()
        
    }, [Status])

    return (
        <>
            <img className={Small !== undefined && Small ? "status-marker-small" : "status-marker"} 
                src={StatusImgSrc} 
                alt={Status}     
            />
        </>
    )
}