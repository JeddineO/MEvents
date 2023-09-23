import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
    return (
        <div>
            <main className="flex-shrink-0">


                <header className="py-5">
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5">

                                <div className="text-center text-xxl-start">
                                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Design &middot; Development &middot; Marketing</div></div>
                                    <div className="fs-3 fw-light text-muted">MEvents</div>
                                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">TOUT POUR VOTRE EVENEMENT</span></h1>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                        <Link to='/create' className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" >Sing in</Link>
                                        <Link to='/Login' className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" >Log in</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7">

                                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                    <div className="profile bg-gradient-primary-to-secondary">

                                        <div className="dots-1">


                                        </div>
                                        <div className="dots-2">


                                        </div>
                                        <div className="dots-3">


                                        </div>
                                        <div className="dots-4">


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


            </main>

            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                        <div className="col-auto">
                            <a className="small" href="#!">Privacy</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Terms</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    );
}

export default Main;