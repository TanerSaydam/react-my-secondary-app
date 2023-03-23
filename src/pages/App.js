import { useState } from "react";

const App = () => {   
    const [inputs, setInputs] = useState({});    
    const [professions, setProffesions] = useState(["Muhasebe","Yazılım","IT","Tester","Patron"])
    const handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(val => ({...val, [name]: value}));
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <h1 className="alert alert-success">Merhaba</h1>  
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Ad</label>
                    <input 
                        className="form-control" 
                        name="name" 
                        id="name" 
                        required 
                        minLength="3"
                        value={inputs.name || ""}
                        onChange={handleChange}                        
                        />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="lastName">Soyad</label>
                    <input
                        name="lastName" 
                        id="lastName"
                        className="form-control"
                        required
                        minLength="3"
                        value={inputs.lastName || ""}
                        onChange={handleChange}                         
                     />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="profession">Meslek</label>
                    <select 
                        name="profession" 
                        className="form-control" 
                        value={inputs.profession || ""} 
                        onChange={handleChange}>
                        <option>Seçim Yapınız...</option>
                        {professions.map((val,index)=> {
                            return(
                                <>
                                <option key={index}>{val}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group mt-2">
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100">
                        Kaydet
                    </button>
                </div>
            </form>         
        </>
    )
}

export default App;