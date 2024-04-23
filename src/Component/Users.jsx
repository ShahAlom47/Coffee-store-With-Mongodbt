

const Users = () => {
    return (
        <div>
            <h1 className=" text-4xl text-center my-5 font-bold">Users</h1>
            <hr />
            <div className="grid gap-3 grid-cols-2 p-4 ">
                <div className=" bg-slate-300 rounded-xl p-4">
                <p>Name: </p>
                <p>Email: </p>
                <p>Create Time: </p>
                </div>
            </div>
            
        </div>
    );
};

export default Users;