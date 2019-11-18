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
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.RegistryAccessesV1Api();
  });

  describe('(package)', function() {
    describe('RegistryAccessesV1Api', function() {
      describe('createRegistryAccess', function() {
        it('should call createRegistryAccess successfully', function(done) {
          // TODO: uncomment, update parameter values for createRegistryAccess call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1HostAccess();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.readme = "";
          body.tags = [""];
          body.created_at = new Date();
          body.updated_at = new Date();
          body.frozen = false;
          body.disabled = false;
          body.insecure = false;
          body.deleted = false;
          body.k8s_secret = "";
          body.url = "";

          instance.createRegistryAccess(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1HostAccess);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.readme).to.be.a('string');
            expect(data.readme).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.insecure).to.be.a('boolean');
            expect(data.insecure).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.k8s_secret).to.be.a('string');
            expect(data.k8s_secret).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteRegistryAccess', function() {
        it('should call deleteRegistryAccess successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteRegistryAccess call
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.deleteRegistryAccess(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRegistryAccess', function() {
        it('should call getRegistryAccess successfully', function(done) {
          // TODO: uncomment, update parameter values for getRegistryAccess call and complete the assertions
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.getRegistryAccess(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1HostAccess);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.readme).to.be.a('string');
            expect(data.readme).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.insecure).to.be.a('boolean');
            expect(data.insecure).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.k8s_secret).to.be.a('string');
            expect(data.k8s_secret).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listRegistryAccessNames', function() {
        it('should call listRegistryAccessNames successfully', function(done) {
          // TODO: uncomment, update parameter values for listRegistryAccessNames call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listRegistryAccessNames(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListHostAccessesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1HostAccess);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.readme).to.be.a('string');
                expect(data.readme).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
                expect(data.frozen).to.be.a('boolean');
                expect(data.frozen).to.be(false);
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.insecure).to.be.a('boolean');
                expect(data.insecure).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                expect(data.k8s_secret).to.be.a('string');
                expect(data.k8s_secret).to.be("");
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listRegistryAccesses', function() {
        it('should call listRegistryAccesses successfully', function(done) {
          // TODO: uncomment, update parameter values for listRegistryAccesses call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listRegistryAccesses(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListHostAccessesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1HostAccess);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.readme).to.be.a('string');
                expect(data.readme).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
                expect(data.frozen).to.be.a('boolean');
                expect(data.frozen).to.be(false);
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.insecure).to.be.a('boolean');
                expect(data.insecure).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                expect(data.k8s_secret).to.be.a('string');
                expect(data.k8s_secret).to.be("");
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("");
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchRegistryAccess', function() {
        it('should call patchRegistryAccess successfully', function(done) {
          // TODO: uncomment, update parameter values for patchRegistryAccess call and complete the assertions
          /*
          var owner = "owner_example";
          var host_access_uuid = "host_access_uuid_example";
          var body = new PolyaxonSdk.V1HostAccess();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.readme = "";
          body.tags = [""];
          body.created_at = new Date();
          body.updated_at = new Date();
          body.frozen = false;
          body.disabled = false;
          body.insecure = false;
          body.deleted = false;
          body.k8s_secret = "";
          body.url = "";

          instance.patchRegistryAccess(owner, host_access_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1HostAccess);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.readme).to.be.a('string');
            expect(data.readme).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.insecure).to.be.a('boolean');
            expect(data.insecure).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.k8s_secret).to.be.a('string');
            expect(data.k8s_secret).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateRegistryAccess', function() {
        it('should call updateRegistryAccess successfully', function(done) {
          // TODO: uncomment, update parameter values for updateRegistryAccess call and complete the assertions
          /*
          var owner = "owner_example";
          var host_access_uuid = "host_access_uuid_example";
          var body = new PolyaxonSdk.V1HostAccess();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.readme = "";
          body.tags = [""];
          body.created_at = new Date();
          body.updated_at = new Date();
          body.frozen = false;
          body.disabled = false;
          body.insecure = false;
          body.deleted = false;
          body.k8s_secret = "";
          body.url = "";

          instance.updateRegistryAccess(owner, host_access_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1HostAccess);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.readme).to.be.a('string');
            expect(data.readme).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());
            expect(data.frozen).to.be.a('boolean');
            expect(data.frozen).to.be(false);
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.insecure).to.be.a('boolean');
            expect(data.insecure).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.k8s_secret).to.be.a('string');
            expect(data.k8s_secret).to.be("");
            expect(data.url).to.be.a('string');
            expect(data.url).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));