import styled from "styled-components";

import Search from "../../assets/icons/search";

const Form = styled.div`
  .form__input {
    padding: 1.18rem 5.1rem 1.18rem 4.37rem;
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
    border: none;
    background-color: #ededed;
    color: #c2c3cb;

    margin: 0 auto;

    border-radius: 1.2rem;
  }
  label {
    position: relative;
  }
  .search {
    position: absolute;
    top: 0%;
    left: 6%;
  }
`;

const FormSearch = () => {
  return (
    <Form>
      <div className="form__search">
        <label>
          <Search />
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Search Art Work / Creator"
            required=""
          />
        </label>
      </div>
    </Form>
  );
};

export default FormSearch;
