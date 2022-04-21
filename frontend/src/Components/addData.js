import React from 'react'
import '../Home.css'

const addData=()=>{
    return(
        <div>
            <div class="container data">
                <div class="row mt-5">
                    <div class="col-md-7 mx-auto">
                        <div class="form-wrapper">
                            <div class="row">
                            <div class="col-md-12">
                                <h4>Enter Your Sleeping Data</h4>
                            </div>
                            </div>
                            <form _lpchecked="1">
                                <div class="row">
    
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Sleeping Time</label>
                                            <input type="time" class="form-control" placeholder="Sleeping"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Waking up Time</label>
                                            <input type="time" class="form-control" placeholder="WakeUp"/>
                                        </div>
                                    </div>
                                        
                                    </div>
                                    <div class="mt-3">
                                        <button class="btn btn-primary">Add Data</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}
export default addData