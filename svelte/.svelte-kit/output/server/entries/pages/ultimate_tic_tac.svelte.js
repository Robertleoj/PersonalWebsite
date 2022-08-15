import { c as create_ssr_component, v as validate_component, e as escape, i as is_promise, n as noop } from '../../_app/immutable/chunks/index-6d4e55ab.js';
import { P as Page } from '../../_app/immutable/chunks/Page-33e15f72.js';

let wasm;

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
function add(a, b) {
    const ret = wasm.add(a, b);
    return ret >>> 0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
*/
const Player = Object.freeze({ PCross:0,"0":"PCross",PCircle:1,"1":"PCircle", });
/**
*/
const CellState = Object.freeze({ CEmpty:0,"0":"CEmpty",CCross:1,"1":"CCross",CCircle:2,"2":"CCircle", });
/**
*/
const BoardState = Object.freeze({ BAvailable:0,"0":"BAvailable",BDraw:1,"1":"BDraw",BCircle:2,"2":"BCircle",BCross:3,"3":"BCross", });
/**
*/
class APIState {

    static __wrap(ptr) {
        const obj = Object.create(APIState.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_apistate_free(ptr);
    }
    /**
    * @returns {number}
    */
    get cell_ptr() {
        const ret = wasm.__wbg_get_apistate_cell_ptr(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set cell_ptr(arg0) {
        wasm.__wbg_set_apistate_cell_ptr(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get board_ptr() {
        const ret = wasm.__wbg_get_apistate_board_ptr(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set board_ptr(arg0) {
        wasm.__wbg_set_apistate_board_ptr(this.ptr, arg0);
    }
    /**
    * @returns {BoardCoord | undefined}
    */
    get force_board() {
        const ret = wasm.__wbg_get_apistate_force_board(this.ptr);
        return ret === 0 ? undefined : BoardCoord.__wrap(ret);
    }
    /**
    * @param {BoardCoord | undefined} arg0
    */
    set force_board(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, BoardCoord);
            ptr0 = arg0.ptr;
            arg0.ptr = 0;
        }
        wasm.__wbg_set_apistate_force_board(this.ptr, ptr0);
    }
    /**
    * @returns {number}
    */
    get turn() {
        const ret = wasm.__wbg_get_apistate_turn(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set turn(arg0) {
        wasm.__wbg_set_apistate_turn(this.ptr, arg0);
    }
    /**
    * @returns {boolean}
    */
    get is_terminal() {
        const ret = wasm.__wbg_get_apistate_is_terminal(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set is_terminal(arg0) {
        wasm.__wbg_set_apistate_is_terminal(this.ptr, arg0);
    }
    /**
    * @returns {number | undefined}
    */
    get winner() {
        const ret = wasm.__wbg_get_apistate_winner(this.ptr);
        return ret === 2 ? undefined : ret;
    }
    /**
    * @param {number | undefined} arg0
    */
    set winner(arg0) {
        wasm.__wbg_set_apistate_winner(this.ptr, isLikeNone(arg0) ? 2 : arg0);
    }
}
/**
*/
class BoardCoord {

    static __wrap(ptr) {
        const obj = Object.create(BoardCoord.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_boardcoord_free(ptr);
    }
}
/**
*/
class CellCoord {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_cellcoord_free(ptr);
    }
}
/**
*/
class Game {

    static __wrap(ptr) {
        const obj = Object.create(Game.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_game_free(ptr);
    }
    /**
    * @returns {Game}
    */
    static new() {
        const ret = wasm.game_new();
        return Game.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    str() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.game_str(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {APIState}
    */
    get_state() {
        const ret = wasm.game_get_state(this.ptr);
        return APIState.__wrap(ret);
    }
    /**
    * @param {number} br
    * @param {number} bc
    * @param {number} sr
    * @param {number} sc
    * @returns {number}
    */
    static get_board_idx(br, bc, sr, sc) {
        const ret = wasm.game_get_board_idx(br, bc, sr, sc);
        return ret;
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = new Int32Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(bytes) {
    const imports = getImports();

    const module = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('ultimate_tic_tac_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

const ttWasm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    add,
    Player,
    CellState,
    BoardState,
    APIState,
    BoardCoord,
    CellCoord,
    Game,
    initSync,
    default: init
}, Symbol.toStringTag, { value: 'Module' }));

/* src/components/UltimateTicTac/UltimateTicTac.svelte generated by Svelte v3.49.0 */

const UltimateTicTac = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let game = ttWasm.Game.new();

	return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
		default: () => {
			return `<pre>${escape(game.str())}</pre>`;
		}
	})}`;
});

/* src/routes/ultimate_tic_tac.svelte generated by Svelte v3.49.0 */

const Ultimate_tic_tac = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const loadWasm = init();

	return `${(function (__value) {
		if (is_promise(__value)) {
			__value.then(null, noop);
			return ``;
		}

		return (function () {
			return `
    ${validate_component(UltimateTicTac, "UltimateTicTac").$$render($$result, {}, {}, {})}
`;
		})();
	})(loadWasm)}`;
});

export { Ultimate_tic_tac as default };
