from unittest.mock import Mock, patch
from nose.tools import assert_true

from web.riot import verify_summoner

class TestRiot:

    @classmethod
    def setup(cls):
        cls.mock_get_patcher = patch('web.riot.requests.get')
        cls.mock_get = cls.mock_get_patcher.start()

    @classmethod
    def teardown(cls):
        cls.mock_get_patcher.stop()

    def test_verify_summoner_name_is_ok(self):
        self.mock_get.return_value.ok = True
        self.mock_get.return_value = Mock()

        response = verify_summoner('test name')

        assert_true(response)