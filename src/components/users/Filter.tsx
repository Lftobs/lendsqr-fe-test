type Props = {
  filter: Boolean
}

const Filter = ({filter}: Props) => {
  return (
    <div className="filter" data-open={filter}>
      <form>
              <label>Organisation</label>
              <select id="org">
                  <option selected>Select</option>
              </select>
              <label>Username</label>
              <input type="text" name="" id="" placeholder="User" />
              <label>Email</label>
              <input type="email" name="" id="" placeholder="Email" />
              <label>Date</label>
              <input type="date" name="" id="" placeholder="Date" />
              <label>Phone Number</label>
              <input type="tel" name="" id="" placeholder="Phone Number" />
              <label>Status</label>
              <input type="text" name="" id="" placeholder="Status" />
              <div className="buttons">
                  <button>Reset</button>
                  <button>Filter</button>
              </div>
      </form>
    </div>
  )
}

export default Filter