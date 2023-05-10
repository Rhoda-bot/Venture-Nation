import React from 'react';

type props = {
  sendTags: React.Dispatch<React.SetStateAction<any>>,
  tag: React.SetStateAction<any>

}

function Tag({ sendTags, tag }: props) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key !== 'Enter') return;
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (!value.trim()) return;
    sendTags([...tag, value]);
    target.value = '';
  }
  const removeTag = (index:number) => {
    sendTags(tag.filter((el:any, i:number) => i !== index));
  };
  return (
    <div className="tag">
      <div className="tag__container">
        {
      tag?.map((tags: string, index:number) => (
        <div className="tag__container--item" key={index}>
          <span className="text">{tags}</span>
          <span className="tag__container--close" onClick={() => removeTag(index)} aria-hidden="true">&times;</span>
        </div>
      ))
      }
        <input
          type="text"
          name="inputTag"
          onKeyDown={handleKeyDown}
          className="tag__container--input"
          placeholder="List out your skills"
        />
      </div>
    </div>
  );
}
export default Tag;