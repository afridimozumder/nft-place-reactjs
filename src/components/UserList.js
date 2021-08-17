import Info from './User';

const UserList = ({userList, deleteCallback})=>{
    return(
        <div>
            <h1>All User List</h1>

            {
                userList.map((u)=>{
                    return <Info key={u.id} {...u} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default UserList; 