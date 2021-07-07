import styled from "styled-components";
import color from "../Constants/color"
const SearchContainer = styled.form.attrs(props => ({

}))`
    width:25rem;
    height:3rem;
    background-color:white;
    position:relative;
    display:flex;
    justify-content: space-around;
    border:1px solid ${color.border};
    border-radius:5px;
    input{
        font-size:1rem;
        height:100%;
        width:80%;
        border:none;
        outline:none;
    }
    button{
        color:${color.border};
        height:100%;
        width:3rem;
        border:none;
        background:transparent;
        outline:none;
        .btn-search{
            font-size:1rem;
        }
    }
`
const SearchBox = () => {
    return (
        <SearchContainer>
            <input placeholder="What do you want to learn ?">

            </input>
            <button>
                <i className="fas fa-search btn-search" />
            </button>
        </SearchContainer>
    )
}
export default SearchBox