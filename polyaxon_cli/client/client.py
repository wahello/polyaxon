# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

from polyaxon_cli.managers.auth import AuthConfigManager
from polyaxon_cli.managers.config import GlobalConfigManager
from polyaxon_client import PolyaxonClient as BasePolyaxonClient


class PolyaxonClient(BasePolyaxonClient):
    def __init__(self):
        host = GlobalConfigManager.get_value('host')
        http_port = GlobalConfigManager.get_value('http_port')
        ws_port = GlobalConfigManager.get_value('ws_port')
        use_https = GlobalConfigManager.get_value('use_https')
        token = AuthConfigManager.get_value('token')
        super(PolyaxonClient, self).__init__(
            host=host,
            http_port=http_port,
            ws_port=ws_port,
            use_https=use_https,
            token=token,
            schema_response=True,
            reraise=True,
        )
