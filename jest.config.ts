import type { Config } from 'jest'

const config: Config = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.tsx?$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

export default config
