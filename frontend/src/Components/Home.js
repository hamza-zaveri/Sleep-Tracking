import React from 'react'
import '../Home.css'

const Home=()=>{
    return(
        <div>
            <section id="welcome" class="jumbotron">
            <div class="container text-center">
                <h1>Sleep Tracker</h1>
                <p>Track your sleeping time and schedule from this website</p>
                <p><a class="btn btn-a btn-lg" href="#" role="button">Add Date</a></p>
            </div>
            </section> 
            <section class="contact-from pt-4">
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
            </section>         
        </div>
    )
}
export default Home