
const Benefits = () => {
    return (
        <div className="max-w-[90%] mx-auto">
            <div className="border border-blue-100 p-3">
                <h1 className="text-center font-bold text-4xl">Get Benefits</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 ">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Developers</h2>
                        <p>
                            Our app streamlines coding, fosters collaboration for professionals, and ensures precision in banking. Customizable and efficient, it optimizes tasks for diverse industries.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Corporate Professionals</h2>
                        <p>
                        The app centralizes tasks for professionals, promoting seamless communication and collaboration. Reporting features empower teams with valuable insights for data-driven decisions and achieving objectives.</p>

                    </div>
                    
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                        <h2 className="card-title">Bankers</h2>
                        <p>
                        In banking, our app is vital for managing client interactions, transactions, and compliance. With reminders and prioritization, bankers stay on top, ensuring exceptional service and confident navigation.</p>

                </div>
                </div>
                </div>
                   
            </div>
            
        
    );
};

export default Benefits;