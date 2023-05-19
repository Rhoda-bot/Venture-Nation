import React from 'react';

type props = {
  setSkills: React.Dispatch<React.SetStateAction<any>>,
  skills: React.SetStateAction<any>

}

function Tag({ setSkills, skills }: props) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    e.preventDefault();
    if (e.key !== 'Enter')  return;
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (!value.trim()) return;
    setSkills([...skills, value]);
    target.value = '';
  }
  const removeTag = (index:number) => {
    setSkills(skills.filter((el:any, i:number) => i !== index));
  };
  return (
    <div className="tag">
      <div className="tag__container">
        {
      skills?.map((tags: string, index:number) => (
        <div className="tag__container--item" key={index}>
          <span className="text">{tags}</span>
          <span className="tag__container--close" onClick={() => removeTag(index)} aria-hidden="true">&times;</span>
        </div>
      ))
      }
        <input
          type="text"
          name="input"
          onKeyDown={(e:any) => e.key === "Enter" && e.preventDefault()}
          onKeyUp={handleKeyDown}
          // onSubmit={handleKeyDown}
          className="tag__container--input"
          placeholder="Type and press enter"
        />
      </div>
    </div>
  );
}
export default Tag;