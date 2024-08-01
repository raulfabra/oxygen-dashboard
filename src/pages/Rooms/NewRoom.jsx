import styled from 'styled-components'

const Main = styled.main`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 75%;
`

export const NewRoom = () => {
  return (
    <Main>
      <form>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>

        <button
          type="button"
          onClick={() => alert('Well done! Booking complete.')}
        >
          Create
        </button>
      </form>
    </Main>
  )
}
