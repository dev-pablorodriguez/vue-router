const authGuard = () => {
    const random = Math.random() * 100;

    if(random > 50){
        console.log('Autenticado - canAccess');
        // return true;
    }else{
        console.log(random, '¡Bloqueado por el beforeEach Guard - canAccess!');
        return false;
    }
}

export default authGuard;