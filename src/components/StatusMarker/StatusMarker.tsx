import { useState, useEffect } from "react"
import statusIcons from './statusIcons.json';

const iconsPath = './icons/'
const buffPath = iconsPath + 'buff-icons/'
const debuffPath = iconsPath + 'debuff-icons/'
const statusPath = iconsPath + 'status-icons/'

interface IStatusMarker {
    status: string;
    small?: boolean
}

export const StatusMarker: React.FC<IStatusMarker> = ({ status, small }) => {

    const [Status] = useState(status)
    const [StatusImgSrc, setStatusImgSrc] = useState("")
    const classList = !!small ? "status-marker small" : "status-marker"

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
            <img className={classList}
                src={StatusImgSrc} 
                alt={Status}     
            />
        </>
    )
}