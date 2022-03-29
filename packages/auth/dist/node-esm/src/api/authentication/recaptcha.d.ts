/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { RecaptchaClientType, RecaptchaVersion } from '../index';
import { Auth } from '../../model/public_types';
export declare function getRecaptchaParams(auth: Auth): Promise<string>;
interface GetRecaptchaConfigRequest {
    tenantId?: string;
    clientType?: RecaptchaClientType;
    version?: RecaptchaVersion;
}
interface GetRecaptchaConfigResponse {
    recaptchaKey?: string;
}
export declare function getRecaptchaConfig(auth: Auth, request: GetRecaptchaConfigRequest): Promise<GetRecaptchaConfigResponse>;
export {};