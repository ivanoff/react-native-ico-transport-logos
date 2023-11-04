declare module 'react-native-ico-transport-logos' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'kia' |
      'smart' |
      'fiat' |
      'ford' |
      'mini' |
      'porsche' |
      'jeep' |
      'holden' |
      'ferrari' |
      'tesla' |
      'sym-motor' |
      'tvs' |
      'bimota' |
      'beat' |
      'vespa' |
      'victory' |
      'kymco' |
      'daelim' |
      'hero' |
      'triumph' |
      'hyosung' |
      'derbi' |
      'harley-davidson' |
      'piaggio' |
      'husqvarna' |
      'kawasaki' |
      'ktm' |
      'honda-1' |
      'yamaha' |
      'ducati' |
      'porto' |
      'new-york' |
      'underground' |
      'tokyo' |
      'sao-paulo' |
      'danish-air-transport' |
      'xiamen-air' |
      'swiss-international-airlines' |
      'bangkok-airways' |
      'turkish-airlines' |
      'delta-airlines' |
      'klm' |
      'malaysia-airlines' |
      'emirates' |
      'singapore-airlines' |
      'iberia' |
      'british-airways' |
      'air-china' |
      'vueling' |
      'air-newzealand' |
      'thai' |
      'qantas' |
      'japan-airlines' |
      'american-airlines' |
      'air-canada' |
      'citroen' |
      'nissan' |
      'subaru' |
      'mercury' |
      'suzuki' |
      'infiniti' |
      'peugeot' |
      'bmw' |
      'acura' |
      'hyundai' |
      'pontiac' |
      'volkswagen' |
      'lexus' |
      'honda' |
      'renault' |
      'opel' |
      'cadillac' |
      'volvo' |
      'audi' |
      'chevrolet' |
      'mercedes-benz' |
      'mitsubishi' |
      'buick' |
      'toyota' |
      'mazda';

    type iconColors = '#000010' |
      '#004380' |
      '#00539E' |
      '#007D55' |
      '#0092BA' |
      '#009A68' |
      '#00ADDC' |
      '#014896' |
      '#191E2B' |
      '#1E2C75' |
      '#1FA2D1' |
      '#202738' |
      '#21AADB' |
      '#223387' |
      '#233054' |
      '#24272B' |
      '#263AA3' |
      '#2C44BF' |
      '#2D3E6C' |
      '#2EE3FF' |
      '#331947' |
      '#3E5594' |
      '#44225E' |
      '#444752' |
      '#484C57' |
      '#568A18' |
      '#6E6E6E' |
      '#737474' |
      '#808080' |
      '#898889' |
      '#8C8C8C' |
      '#8EBB37' |
      '#A3AFE3' |
      '#A51F23' |
      '#A6A6A6' |
      '#B3379F' |
      '#B5B5B5' |
      '#C7232C' |
      '#C91D0F' |
      '#CCCCCC' |
      '#CFCFCF' |
      '#D1851C' |
      '#D642BF' |
      '#D6721C' |
      '#D68500' |
      '#E2001A' |
      '#E3E3E3' |
      '#E42111' |
      '#E82934' |
      '#EBEBEB' |
      '#ED4F58' |
      '#F10000' |
      '#F3C153' |
      '#F3DB53' |
      '#F8B31F' |
      '#FCBA30' |
      '#FCEE21' |
      '#FDFDFD' |
      '#FECE41' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
