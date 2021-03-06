/**
 * @author Sean sean.snow@live.com
 * @date 2015/12/25
 */


import ISOStringFieldPackager from './ISOStringFieldPackager';
import NullPadder from '../NullPadder';
import BcdPrefixer from '../BcdPrefixer';
import AsciiInterpreter from '../AsciiInterpreter';

class IFB_LLCHAR extends ISOStringFieldPackager {

    constructor(len:Number, description:String) {
        super(len, description, NullPadder, AsciiInterpreter, BcdPrefixer.LL);
    }

    setLength(len:Number) {
        this.checkLength(len, 99);
        super.setLength(len);
    }
}

export default IFB_LLCHAR;