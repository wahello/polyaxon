// Copyright 2019 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1ProjectSettings = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The V1ProjectSettings model module.
   * @module model/V1ProjectSettings
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>V1ProjectSettings</code>.
   * @alias module:model/V1ProjectSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1ProjectSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1ProjectSettings} obj Optional instance to populate.
   * @return {module:model/V1ProjectSettings} The populated <code>V1ProjectSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('logs_store'))
        obj.logs_store = ApiClient.convertToType(data['logs_store'], 'String');
      if (data.hasOwnProperty('outputs_store'))
        obj.outputs_store = ApiClient.convertToType(data['outputs_store'], 'String');
      if (data.hasOwnProperty('artifacts_stores'))
        obj.artifacts_stores = ApiClient.convertToType(data['artifacts_stores'], ['String']);
      if (data.hasOwnProperty('git_accesses'))
        obj.git_accesses = ApiClient.convertToType(data['git_accesses'], ['String']);
      if (data.hasOwnProperty('registry_accesses'))
        obj.registry_accesses = ApiClient.convertToType(data['registry_accesses'], ['String']);
      if (data.hasOwnProperty('k8s_secrets'))
        obj.k8s_secrets = ApiClient.convertToType(data['k8s_secrets'], ['String']);
      if (data.hasOwnProperty('k8s_config_maps'))
        obj.k8s_config_maps = ApiClient.convertToType(data['k8s_config_maps'], ['String']);
      if (data.hasOwnProperty('run_profile'))
        obj.run_profile = ApiClient.convertToType(data['run_profile'], 'String');
      if (data.hasOwnProperty('run_profiles'))
        obj.run_profiles = ApiClient.convertToType(data['run_profiles'], ['String']);
    }
    return obj;
  }

  /**
   * @member {String} logs_store
   */
  exports.prototype.logs_store = undefined;

  /**
   * @member {String} outputs_store
   */
  exports.prototype.outputs_store = undefined;

  /**
   * @member {Array.<String>} artifacts_stores
   */
  exports.prototype.artifacts_stores = undefined;

  /**
   * @member {Array.<String>} git_accesses
   */
  exports.prototype.git_accesses = undefined;

  /**
   * @member {Array.<String>} registry_accesses
   */
  exports.prototype.registry_accesses = undefined;

  /**
   * @member {Array.<String>} k8s_secrets
   */
  exports.prototype.k8s_secrets = undefined;

  /**
   * @member {Array.<String>} k8s_config_maps
   */
  exports.prototype.k8s_config_maps = undefined;

  /**
   * @member {String} run_profile
   */
  exports.prototype.run_profile = undefined;

  /**
   * @member {Array.<String>} run_profiles
   */
  exports.prototype.run_profiles = undefined;

  return exports;

}));