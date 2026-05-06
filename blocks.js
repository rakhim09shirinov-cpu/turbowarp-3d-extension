/**
 * Scratch Blocks для TurboWarp 3D Extension
 */

const Scratch3_Turbowarp3D = class {
    constructor(runtime) {
        this.runtime = runtime;
        this.turbowarp3d = null;
    }

    static get EXTENSION_ID() {
        return 'turbowarp3d';
    }

    static get EXTENSION_NAME() {
        return '3D (TurboWarp)';
    }

    getInfo() {
        return {
            id: Scratch3_Turbowarp3D.EXTENSION_ID,
            name: Scratch3_Turbowarp3D.EXTENSION_NAME,
            color1: '#0099FF',
            color2: '#007ACC',
            blocks: [
                {
                    opcode: 'init3D',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'инициализировать 3D сцену',
                    arguments: {}
                },
                {
                    opcode: 'loadModel',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'загрузить модель URL: [URL] имя: [NAME]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'https://threejs.org/examples/models/gltf/Duck/glTF/Duck.gltf'
                        },
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        }
                    }
                },
                {
                    opcode: 'loadOBJ',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'загрузить OBJ [OBJURL] с материалами [MTLURL]',
                    arguments: {
                        OBJURL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model.obj'
                        },
                        MTLURL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model.mtl'
                        }
                    }
                },
                {
                    opcode: 'loadGLTF',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'загрузить GLTF/GLB [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model.glb'
                        }
                    }
                },
                {
                    opcode: 'loadFBX',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'загрузить FBX [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model.fbx'
                        }
                    }
                },
                {
                    opcode: 'loadCOLLADA',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'загрузить COLLADA [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model.dae'
                        }
                    }
                },
                {
                    opcode: 'loadSTL',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'загрузить STL [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model.stl'
                        }
                    }
                },
                '---',
                {
                    opcode: 'setModelPosition',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'установить позицию [NAME] X: [X] Y: [Y] Z: [Z]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        },
                        Z: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setModelScale',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'установить масштаб [NAME] X: [X] Y: [Y] Z: [Z]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        Z: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'setModelRotation',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'установить вращение [NAME] X: [X] Y: [Y] Z: [Z]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Z: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                '---',
                {
                    opcode: 'applyForce',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'применить силу [NAME] X: [X] Y: [Y] Z: [Z]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        },
                        X: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        Z: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'setModelMaterial',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'установить материал [NAME] цвет: [COLOR] металл: [METAL] шершавость: [ROUGH]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        },
                        COLOR: {
                            type: Scratch.ArgumentType.COLOR,
                            defaultValue: '#ff0000'
                        },
                        METAL: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.5
                        },
                        ROUGH: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.5
                        }
                    }
                },
                '---',
                {
                    opcode: 'getModelX',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'X позиция [NAME]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        }
                    }
                },
                {
                    opcode: 'getModelY',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Y позиция [NAME]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        }
                    }
                },
                {
                    opcode: 'getModelZ',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Z позиция [NAME]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        }
                    }
                },
                '---',
                {
                    opcode: 'removeModel',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'удалить объект [NAME]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model1'
                        }
                    }
                },
                {
                    opcode: 'clearScene',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'очистить сцену',
                    arguments: {}
                }
            ]
        };
    }

    async init3D() {
        if (!this.turbowarp3d) {
            this.turbowarp3d = new Turbowarp3D();
            await this.turbowarp3d.init();
        }
        return true;
    }

    async loadModel(args) {
        await this.init3D();
        return this.turbowarp3d.loadModel(args.URL, args.NAME);
    }

    async loadOBJ(args) {
        await this.init3D();
        return this.turbowarp3d.loadOBJ(args.OBJURL, args.MTLURL);
    }

    async loadGLTF(args) {
        await this.init3D();
        return this.turbowarp3d.loadGLTF(args.URL);
    }

    async loadFBX(args) {
        await this.init3D();
        return this.turbowarp3d.loadFBX(args.URL);
    }

    async loadCOLLADA(args) {
        await this.init3D();
        return this.turbowarp3d.loadCOLLADA(args.URL);
    }

    async loadSTL(args) {
        await this.init3D();
        return this.turbowarp3d.loadSTL(args.URL);
    }

    setModelPosition(args) {
        if (this.turbowarp3d) {
            this.turbowarp3d.setModelPosition(args.NAME, args.X, args.Y, args.Z);
        }
    }

    setModelScale(args) {
        if (this.turbowarp3d) {
            this.turbowarp3d.setModelScale(args.NAME, args.X, args.Y, args.Z);
        }
    }

    setModelRotation(args) {
        if (this.turbowarp3d) {
            this.turbowarp3d.setModelRotation(args.NAME, args.X, args.Y, args.Z);
        }
    }

    applyForce(args) {
        if (this.turbowarp3d) {
            this.turbowarp3d.applyForceToModel(args.NAME, args.X, args.Y, args.Z);
        }
    }

    setModelMaterial(args) {
        if (this.turbowarp3d) {
            this.turbowarp3d.setModelMaterial(args.NAME, args.COLOR, args.METAL, args.ROUGH);
        }
    }

    getModelX(args) {
        if (this.turbowarp3d) {
            const pos = this.turbowarp3d.getModelPosition(args.NAME);
            return pos ? pos.x : 0;
        }
        return 0;
    }

    getModelY(args) {
        if (this.turbowarp3d) {
            const pos = this.turbowarp3d.getModelPosition(args.NAME);
            return pos ? pos.y : 0;
        }
        return 0;
    }

    getModelZ(args) {
        if (this.turbowarp3d) {
            const pos = this.turbowarp3d.getModelPosition(args.NAME);
            return pos ? pos.z : 0;
        }
        return 0;
    }

    removeModel(args) {
        if (this.turbowarp3d) {
            this.turbowarp3d.removeModel(args.NAME);
        }
    }

    clearScene() {
        if (this.turbowarp3d) {
            this.turbowarp3d.models.forEach((_, name) => {
                this.turbowarp3d.removeModel(name);
            });
        }
    }
};

// Экспортировать для TurboWarp
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Scratch3_Turbowarp3D;
}
