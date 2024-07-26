import Image from "next/image";
import careerBanner from "../../../public/assets/img/career-banner.png";

const Career = () => {
    return (
        <>
            {/* career title section */}
            <section className="career-banner">
                <div className="container py-4">
                    <div className="career-banner-title">
                        <p className="career-heading">Join us if you want to grow in professional life</p>
                        <p className="pb-4 career-sub-heading">
                            Sed et orci volutpat, pharetra nunc eu, ultrices urna. Etiam sed sapien vitae ipsum Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>

            {/* career banner section */}
            <section className="py-4">
                <div className="w-100">
                    {/* <Image
                        src={careerBanner}
                        className="w-100 h-auto d-lg-none d-block"
                        alt=""
                    /> */}
                    <Image className="w-100 d-lg-block d-none" src={careerBanner} alt="" />
                </div>
            </section>

            {/* careers section */}
            <section className="career-job-area col-md-12">
                <div className="container">
                    <div className="row">
                        <p className="career-job-title">Search jobs at RadarSoft Technologies </p>
                        <div class="input-group career-job-input mb-3">
                            <input type="text" class="form-control" placeholder="Search jobs according to your expertise" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* careers job list section */}
            <section className="career-job-list-area col-md-12">
                <div className="container">
                    <div className="row">
                        <p className="career-job-list-title">10 jobs found</p>
                        <div class="input-group career-job-input mb-3">
                            <input type="text" class="form-control" placeholder="Search jobs according to your expertise" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Career;