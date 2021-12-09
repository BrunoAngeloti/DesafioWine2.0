import Swal from 'sweetalert2'

export function modal(name: string | undefined, behavior: string, type: string){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })
      
    Toast.fire({
        icon: type === 'sucess' ? 'success' : 'warning',
        title: `${name} ${behavior} do carrinho`
    }) 
}