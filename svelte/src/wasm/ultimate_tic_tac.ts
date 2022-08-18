
import init, * as ttWasm from "@src/wasm_modules/ultimate_tic_tac/pkg"

export {wasmInit};

let exp:{module:any, memory: any} = {
    module: ttWasm,
    memory: null
};

const wasmInit = async () => {
    await init().then((res)=>{exp.memory=res});
}

export default exp;
