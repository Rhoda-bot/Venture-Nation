import React from "react";
import sectors from '../../utility/sector.json'
type props = {
    setSector: React.Dispatch<React.SetStateAction<any>>,
    sector: React.SetStateAction<any>
  
  }

const Sector = ({ setSector, sector }: props) => {
    function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        e.preventDefault();
        if (e.key !== 'Enter')  return;
        const target = e.target as HTMLInputElement;
        const { value } = target;
        if (!value.trim()) return;
        setSector([...sector, value]);
        target.value = '';
      }
      const removeTag = (index:number) => {
        setSector(sector.filter((el:any, i:number) => i !== index));
      };
    return(
        <>
             {
                sector?.map((tags: string, index:number) => (
                    <div className="tag__container--item" key={index}>
                    <span className="text">{tags}</span>
                    <span className="tag__container--close" onClick={() => removeTag(index)} aria-hidden="true">&times;</span>
                    </div>
                ))
      }
            <select className="form-select shadow-none px-3 py-3" aria-label="Default select example"  onKeyDown={(e:any) => e.key === "Enter" && e.preventDefault()}
          onKeyUp={handleKeyDown}>
            {
                sectors.map((val:any) => (
                <option  key={val.name}>{val.name}</option>                                          
                                                    
            )) }
            
            </select>
        </>
    )
}
export default Sector