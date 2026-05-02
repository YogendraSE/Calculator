import './my.css'
function Buttonn({label="",className='', onClick=()=>{}}){

 return <div>
    <button className={className} onClick={onClick}> {label}</button>
 </div>
}

export default Buttonn