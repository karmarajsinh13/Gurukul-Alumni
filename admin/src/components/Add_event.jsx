import React from 'react'

export default function Add_event() {
  return (
    <div
    style={{ marginTop: "50px", marginLeft: "260px", marginRight: "20px" }}
  >
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <h3
              style={{
                background: "linear-gradient(to right, black, grey)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Organise Event
            </h3>
            <p class="mb-0">Add Event here</p>
            <form>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        First name
                      </label>
                      <input
                        className="form-control"
                        type="text"
       
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Last name
                      </label>
                      <input
                        className="form-control"
                        type="text"
             
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Phone
                      </label>
                      <input
                        className="form-control"
                        type="phone"
                    
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Username
                      </label>
                      <input
                        className="form-control"
                        type="text"
            
                      
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        graduated_year
                      </label>
                      <select name="status" class="form-control" 
                      onChange={(e) => setgraduated_year(e.target.value)}>
                        <option>Choose</option>
                        <option value="0">2023</option>
                        <option value="1">2024</option>
            
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Dob
                      </label>
                      <input className="form-control" type="date" 
                      onChange={(e) => setdob(e.target.value)} />
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Profile Pic
                      </label>
                      <input className="form-control" type="file" 
                 />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Gender
                      </label>
                      <select name="status" class="form-control" 
                      onChange={(e) => setgender(e.target.value)}>
                        <option>Choose</option>
                        <option value="0">Male</option>
                        <option value="1">FeMale</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Password
                      </label>
                      <input className="form-control" type="password" 
                   />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        City
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        

                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        State
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        
                      />
                    </div>
                  </div>

                 

                  <div className="col-md-12">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                       
                      />
                    </div>
                  </div>
                   <div class="col-md-4">
                    <div className="form-group">
                      <label
                        htmlFor="example-text-input"
                        className="form-control-label"
                      >
                        Status
                      </label>
                      <select name="status" class="form-control"
                     >
                        <option>Choose</option>
                        <option value="0">Inactive</option>
                        <option value="1">Active</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="text-center"
                    style={{
                      marginBottom: "20px",
                      marginRight: "1000px",
                      marginLeft: "10px",
                    }}
                  ></div>
                </div>

                <button
                  type="button"
                  class="btn bg-gradient-info w-100 mt-4 mb-0"
                 
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
