import { render } from "@testing-library/react"

const PageNotFound = () => {
        return (
            <div className="row mt-5 mb-5">
                <div className="col-10 text-center p-5 mx-auto">
                    <h1 className="display-4 mb-4 pb-3">
                        <span className="text-danger">Error 404</span>
                        <p>Page Not Found</p>
                    </h1>
                    <p>Please contact the support</p>
                </div>
            </div>
        )
};

export default PageNotFound;