export const bgCat=(title:string)=>{
    let bgColor;
    switch (title) {
        case 'food':
            bgColor = 'bg-light-blue';
            break;
        case 'travel':
            bgColor = 'bg-light-purple';
            break;
            case 'culture':
              bgColor = 'bg-light-pink';
              break;
              case 'fashion':
                bgColor = 'bg-light-green';
                break;
        // Add more cases as needed for different titles and colors
        default:
            bgColor = ''; // Default value if title doesn't match any case
    }
    return bgColor;
   }