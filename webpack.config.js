import createExpoWebpackConfigAsync from '@expo/webpack-config';

export default async function(env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['native-base']
        }
    }, argv);
    return config;
}