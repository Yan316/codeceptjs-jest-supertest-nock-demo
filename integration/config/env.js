"use strict";

import * as configurations from './configurations'
import request from "supertest";

const testAppURL = configurations.appConfig.systemEnv.testURL;
global.httpRequest = request(testAppURL);
global.testData = '';
global.isLocal = true;

// Get testing data for current env
if (testAppURL == configurations.appConfig.appwEnvURLs.local) {
	global.isLocal = true; // Using local env for detailed function tests
	console.log('Local API testing starts on ' + testAppURL);
} else {
	global.isLocal = false; // Using non-local env to check if the apis can be pinged only
	console.log('Non-Local API testing starts on ' + testAppURL);
}

